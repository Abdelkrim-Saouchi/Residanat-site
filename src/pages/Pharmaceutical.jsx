import PathLayout from "../components/PathLayout";
import PharmSvg from "../components/PharmSvg";

const Pharmaceutical = () => {
  const pharmaceutical = {
    svg: <PharmSvg />,
    title: "Sciences Pharmaceutiques",
    overview:
      "Ces disciplines forment l'essence même du métier de pharmacien ! La pharmacologie, la pharmacognosie, la toxicologie, et bien d'autres, sont des matières fascinantes qui confèrent au pharmacien sa singularité et sa polyvalence.",
    content: [
      {
        specialty: "Pharmacie Galénique",
        lessons: [
          {
            title:
              "les formes pharmaceutiques destinées à la voie orale :sirops, comprimés et gélules",
            path: "P-01",
          },
          {
            title: "les formes pharmaceutiques destinées à la voie parentérale",
            path: "P-02",
          },
          {
            title: "les formes pharmaceutiques destinées à la voie dermique",
            path: "P-03",
          },
          {
            title: "les formes pharmaceutiques destinées à la voie rectale",
            path: "P-04",
          },
          {
            title: "Biopharmacie",
            path: "P-05",
          },
          {
            title: "les formes nouvelles ou en développement",
            path: "P-06",
          },
          {
            title: "Etude de stabilité des médicaments",
            path: "P-07",
          },
          {
            title: "Les bonnes pratiques de fabrication des médicaments",
            path: "P-08",
          },
          {
            title: "les dispersions",
            path: "P-09",
          },
        ],
      },
      {
        specialty: "Pharmacologie",
        lessons: [
          {
            title: "Métabolisme médicamenteux",
            path: "P-10",
          },
          {
            title: "Modélisation et paramètres pharmacocinétiques",
            path: "P-11",
          },
          {
            title: "Interactions médicamenteuses",
            path: "P-12",
          },
          {
            title: "Pharmacovigilance",
            path: "P-13",
          },
          {
            title: "Médicaments du système nerveux autonome",
            path: "P-14",
          },
          {
            title: "Médicaments du système cardiovasculaire",
            path: "P-15",
          },
          {
            title: "Les anti-inflammatoires",
            path: "P-16",
          },
          {
            title: "Médicaments du système digestif",
            path: "P-17",
          },
          {
            title: "Médicaments de l'hémostase",
            path: "P-18",
          },
        ],
      },
      {
        specialty: "Toxicologie",
        lessons: [
          {
            title: "Toxicité des xénobiotiques : mode d'action biochimique",
            path: "P-19",
          },
          {
            title: "Facteurs influençant la toxicité",
            path: "P-20",
          },
          {
            title: "traitement des intoxications aigues",
            path: "P-21",
          },
          {
            title: "les asphyxiants biochimiques et cellulaires",
            path: "P-22",
          },
          {
            title: "les toxiques thioloprives: plomb - cadmium",
            path: "P-23",
          },
          {
            title:
              "pesticides organophosphorés :toxicocinétique, mode d'action et analyse toxicologique",
            path: "P-24",
          },
          {
            title:
              "Ethanol: toxicocinétique, mode d'action et analyse toxicologique",
            path: "P-25",
          },
          {
            title:
              "paracetamol-salicylés: mode d'action et analyse toxicologique",
            path: "P-26",
          },
          {
            title:
              "Méthanol/éthylène glycol et éther glycol: toxicocinétique, mode d'action et analyse toxicologique",
            path: "P-27",
          },
          {
            title: "Contaminants alimentaires : mycotoxines",
            path: "P-28",
          },
        ],
      },
      {
        specialty: "Pharmacognosie",
        lessons: [
          {
            title: "Définitions réglementaires (OMS)",
            path: "P-29",
          },
          {
            title:
              "Méthodes de recherche (classiques et actuelles) de nouvelles substances bioactives à partir des végétaux",
            path: "P-30",
          },
          {
            title:
              "Phytothérapie et vigilance: interactions effets secondaires",
            path: "P-31",
          },
          {
            title:
              "Traitements de transformation des matières premières et formes galéniques de phytothérapie",
            path: "P-32",
          },
          {
            title: "Composés phénoliques",
            path: "P-33",
          },
          {
            title:
              "Terpènes et stéroïdes: huiles essentielles - hétérosides cardiotoniques - saponosides",
            path: "P-34",
          },
          {
            title:
              "Alcaloides: définitions, méthodes générales d'extraction et de caractérisation",
            path: "P-35",
          },
          {
            title:
              "Anticancéreux et antipaludiques d'origine naturelle (uniquement ceux obtenus à partir des végétaux supérieurs",
            path: "P-36",
          },
        ],
      },
    ],
  };
  return <PathLayout {...pharmaceutical} />;
};

export default Pharmaceutical;
