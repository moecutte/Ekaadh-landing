const copy = {
  en: {
    soon: "Coming soon",
    hero_1: "Digital invitations",
    hero_2: "and event management",
    hero_sub:
      "Create private invitations, publish events, and check guests in with a QR. Pay with Zaad or eDahab. Opening soon.",
    pill_1: "Public QR tickets",
    pill_2: "Private invitations",
    pill_3: "Zaad & eDahab",
    who_title: "What we are building",
    att_title: "For attendees",
    att_desc: "Find the event. Pay on your phone. Walk in with a QR.",
    org_title: "For organisers",
    org_desc: "Publish the event. Sell seats. Get paid after the show.",
    host_title: "For hosts",
    host_desc: "Design the invitation. Invite by phone. Keep it private.",
    footer: "Your event · your ticket. Opening soon. © {year} Ekaadh.",
  },
  so: {
    soon: "Waa soo dhowaanaysaa",
    hero_1: "Casumaado dhijitaal ah",
    hero_2: "iyo maamulka dhacdooyinka",
    hero_sub:
      "Samee casumaado gaar ah, daabac dhacdooyin, oo martida ku soo gali QR. Ku bixi Zaad ama eDahab. Dhawaan ayaa furmaya.",
    pill_1: "Tigidhada QR ee dadweynaha",
    pill_2: "Casumaado gaar ah",
    pill_3: "Zaad & eDahab",
    who_title: "Waxa aan dhisayno",
    att_title: "Ka-qaybgalayaasha",
    att_desc: "Hel dhacdada. Ku bixi telefoonkaaga. QR ku gal.",
    org_title: "Qabanqaabiyeyaasha",
    org_desc: "Daabac dhacdada. Iibi kuraasta. Hel lacagta bandhigga ka dib.",
    host_title: "Martigeliyeyaasha",
    host_desc: "Naqshad ee casumaadda. Ku casuum telefoon. Gaar ahaan u hay.",
    footer: "Dhacdadaada · tigidhkaaga. Dhawaan ayaa furmaya. © {year} Ekaadh.",
  },
};

const year = String(new Date().getFullYear());
let lang = localStorage.getItem("ekaadh-lang") || "en";

function applyLang(next) {
  lang = next;
  const t = copy[lang] || copy.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    el.textContent = t[key].replace("{year}", year);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("is-on", btn.getAttribute("data-lang") === lang);
  });
  localStorage.setItem("ekaadh-lang", lang);
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
});

applyLang(lang);
