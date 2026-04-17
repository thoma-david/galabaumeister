export const NAV_LINKS = [
  { label: "Startseite", path: "/" },
  {
    label: "Leistungen",
    path: "/leistungen",
    children: [
      { label: "Gartengestaltung", path: "/leistungen/gartengestaltung" },
      { label: "Gartenpflege", path: "/leistungen/gartenpflege" },
      { label: "Pflasterarbeiten", path: "/leistungen/pflasterarbeiten" },
      { label: "Terrassenbau", path: "/leistungen/terrassenbau" },
      { label: "Zaunbau & Sichtschutz", path: "/leistungen/zaunbau" },
      { label: "Baumpflege", path: "/leistungen/baumpflege" },
      { label: "Bewässerungssysteme", path: "/leistungen/bewaesserung" },
      { label: "Winterdienst", path: "/leistungen/winterdienst" },
    ],
  },
  { label: "Kontakt", path: "/kontakt" },
];

export const FOOTER_LINKS = {
  leistungen: [
    { label: "Gartengestaltung", path: "/leistungen/gartengestaltung" },
    { label: "Gartenpflege", path: "/leistungen/gartenpflege" },
    { label: "Pflasterarbeiten", path: "/leistungen/pflasterarbeiten" },
    { label: "Terrassenbau", path: "/leistungen/terrassenbau" },
    { label: "Zaunbau & Sichtschutz", path: "/leistungen/zaunbau" },
    { label: "Baumpflege", path: "/leistungen/baumpflege" },
  ],
  unternehmen: [
    { label: "Kontakt", path: "/kontakt" },
    { label: "Impressum", path: "/impressum" },
    { label: "Datenschutz", path: "/datenschutz" },
  ],
  regionen: [
    { label: "Berlin", path: "/region/berlin" },
    { label: "Potsdam", path: "/region/potsdam" },
    { label: "Teltow", path: "/region/teltow" },
    { label: "Kleinmachnow", path: "/region/kleinmachnow" },
    { label: "Falkensee", path: "/region/falkensee" },
  ],
};
