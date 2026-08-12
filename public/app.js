const copy = {
  en: {
    soon: "Coming soon",
    hero_1a: "Digital",
    hero_1b: "invitations",
    hero_2: "event management",
    hero_sub:
      "One platform for public ticket sales and private invitation events. Guests check in with a QR. Pay with Zaad or eDahab.",
    stores_label: "The app is coming to",
    play_kicker: "Get it on",
    apple_kicker: "Download on the",
    store_soon: "Coming soon",
    flows_label: "How it works",
    flows_title: "Two kinds of events",
    pub_title: "Public — sell tickets",
    pub_s1t: "Create an organiser account",
    pub_s2t: "Set up the event",
    pub_s3t: "Publish and share",
    pub_s4t: "Scan and get paid",
    pri_title: "Private — send invitations",
    pri_s1t: "Create a host account",
    pri_s2t: "Pick design and capacity",
    pri_s3t: "Pay for the package",
    pri_s4t: "Invite guests",
    footer: "Your event · your ticket. Opening soon. © {year} Ekaadh.",
  },
  so: {
    soon: "Waa soo dhowaanaysaa",
    hero_1a: "Casumaado",
    hero_1b: "dhijitaal ah",
    hero_2: "maamulka dhacdooyinka",
    hero_sub:
      "Hal goob oo tigidhada dadweynaha iyo casumaadaha gaarka ah. Martidu QR ayay ku galaan. Ku bixi Zaad ama eDahab.",
    stores_label: "Abka wuxuu imanayaa",
    play_kicker: "Ka hel",
    apple_kicker: "Ka soo deji",
    store_soon: "Waa soo dhowaanaysaa",
    flows_label: "Sida ay u shaqeyso",
    flows_title: "Laba nooc oo dhacdo",
    pub_title: "Dadweyne — iibi tigidho",
    pub_s1t: "Samee akoon qabanqaabiye",
    pub_s2t: "Deji dhacdada",
    pub_s3t: "Daabac oo la wadaag",
    pub_s4t: "Sawir oo hel lacagta",
    pri_title: "Gaar ah — dir casumaado",
    pri_s1t: "Samee akoon martigeliye",
    pri_s2t: "Dooro naqshad iyo awood",
    pri_s3t: "Bixi xirmada",
    pri_s4t: "Casuum martida",
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
