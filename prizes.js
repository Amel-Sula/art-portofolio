// Shared by the game (index.html) and Sara's page (kode.html).
// The prize is fixed by the code, so a code always shows the same prize on any phone.
// Changing this list or the order changes which prize old codes give.
window.PRIZES = [
  { name: "The Ritual of Sakura", detail: "Shkumë dushi me lule qershie dhe qumësht orizi" },
  { name: "The Ritual of Karma", detail: "Krem trupi me lule zambaku dhe çaj të bardhë" },
  { name: "The Ritual of Ayurveda", detail: "Shkopinj aromatikë për shtëpinë" },
  { name: "The Ritual of Jing", detail: "Spërkatës për jastëkun, për një gjumë të qetë" },
  { name: "The Ritual of Hammam", detail: "Pastrues trupi me eukalipt dhe rozmarinë" },
  { name: "The Ritual of Mehr", detail: "Qiri aromatik me portokall të ëmbël" },
  { name: "Zbritje 15%", detail: "Në blerjen tënde të radhës" },
  { name: "Mostër parfumi", detail: "Një mostër falas nga koleksioni i parfumeve" },
];

// No 0/O or 1/I/L, so codes are easy to read.
window.CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
window.CODE_LENGTH = 6;

window.cleanCode = kod => String(kod || "").toUpperCase().replace(/[^A-Z0-9]/g, "");

window.isCodeShape = kod =>
  kod.length === CODE_LENGTH && [...kod].every(c => CODE_ALPHABET.includes(c));

window.newCode = () => {
  const bytes = crypto.getRandomValues(new Uint8Array(CODE_LENGTH));
  return [...bytes].map(b => CODE_ALPHABET[b % CODE_ALPHABET.length]).join("");
};

// FNV-1a hash of the code picks the prize; random codes spread evenly over the list.
window.prizeFor = kod => {
  let h = 0x811c9dc5;
  for (const c of kod) { h ^= c.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return PRIZES[h % PRIZES.length];
};

window.INSTAGRAM = "zemerpako";
