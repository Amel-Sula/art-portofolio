// Backend for the Zemerpako shake-to-win page.
// It lives in a Google Sheet (Extensions → Apps Script) and keeps one row per code:
//   Kodi | Krijuar | Statusi | Dhurata | Luajtur më
//
// The admin key is NOT written here (this file is public on GitHub).
// Set it in Apps Script: Project Settings → Script Properties → ADMIN_KEY.

// Every prize has the same chance.
const PRIZES = [
  { name: "The Ritual of Sakura", detail: "Shkumë dushi me lule qershie dhe qumësht orizi" },
  { name: "The Ritual of Karma", detail: "Krem trupi me lule zambaku dhe çaj të bardhë" },
  { name: "The Ritual of Ayurveda", detail: "Shkopinj aromatikë për shtëpinë" },
  { name: "The Ritual of Jing", detail: "Spërkatës për jastëkun, për një gjumë të qetë" },
  { name: "The Ritual of Hammam", detail: "Pastrues trupi me eukalipt dhe rozmarinë" },
  { name: "The Ritual of Mehr", detail: "Qiri aromatik me portokall të ëmbël" },
  { name: "Zbritje 15%", detail: "Në blerjen tënde të radhës" },
  { name: "Mostër parfumi", detail: "Një mostër falas nga koleksioni i parfumeve" },
];

const SHEET_NAME = "Kodet";
const HEADERS = ["Kodi", "Krijuar", "Statusi", "Dhurata", "Luajtur më"];
const UNUSED = "I papërdorur";
const USED = "I përdorur";
// No 0/O or 1/I/L, so codes are easy to read.
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function doGet(e) {
  const p = (e && e.parameter) || {};
  let out;
  try {
    if (p.action === "new") out = newCode(p.key);
    else if (p.action === "check") out = check(p.kod);
    else if (p.action === "play") out = play(p.kod);
    else out = { error: "unknown_action" };
  } catch (err) {
    out = { error: "server", message: String(err) };
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

function sheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sh;
}

// Returns { row, values } for a code, or null.
function findCode(sh, kod) {
  const last = sh.getLastRow();
  if (last < 2) return null;
  const codes = sh.getRange(2, 1, last - 1, 1).getValues();
  for (let i = 0; i < codes.length; i++) {
    if (String(codes[i][0]) === kod) {
      const row = i + 2;
      return { row, values: sh.getRange(row, 1, 1, HEADERS.length).getValues()[0] };
    }
  }
  return null;
}

function clean(kod) {
  return String(kod || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function newCode(key) {
  const adminKey = PropertiesService.getScriptProperties().getProperty("ADMIN_KEY");
  if (!adminKey || key !== adminKey) return { error: "wrong_key" };
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = sheet();
    let kod;
    do {
      kod = "";
      for (let i = 0; i < 6; i++) kod += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    } while (findCode(sh, kod));
    sh.appendRow([kod, new Date(), UNUSED, "", ""]);
    return { kod };
  } finally {
    lock.releaseLock();
  }
}

function check(kod) {
  kod = clean(kod);
  if (!kod) return { status: "invalid" };
  const found = findCode(sheet(), kod);
  if (!found) return { status: "invalid" };
  if (found.values[2] === USED) return { status: "used", prize: prizeFor(found.values[3]) };
  return { status: "unused" };
}

function play(kod) {
  kod = clean(kod);
  if (!kod) return { status: "invalid" };
  // The lock stops one code from being played twice at the same moment.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = sheet();
    const found = findCode(sh, kod);
    if (!found) return { status: "invalid" };
    if (found.values[2] === USED) return { status: "used", prize: prizeFor(found.values[3]) };
    const prize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
    sh.getRange(found.row, 3, 1, 3).setValues([[USED, prize.name, new Date()]]);
    return { status: "won", prize };
  } finally {
    lock.releaseLock();
  }
}

function prizeFor(name) {
  return PRIZES.find(p => p.name === name) || { name: String(name), detail: "" };
}
