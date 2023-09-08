import ChemSvg from "../components/ChemSvg";
import PathLayout from "../components/PathLayout";

const Fundamentals = () => {
  const fundamentals = {
    svg: <ChemSvg />,
    title: "Sciences Fondamentales",
    overview:
      "Ces disciplines forment l'essence même du métier de pharmacien ! La pharmacologie, la pharmacognosie, la toxicologie, et bien d'autres, sont des matières fascinantes qui confèrent au pharmacien sa singularité et sa polyvalence.",
    content: [
      {
        specialty: "Chimie Analytique",
        lessons: [
          {
            title: "Réactions acido-basiques",
            path: "F-01",
          },
          {
            title: "Réactions d'oxydo-réduction",
            path: "F-02",
          },
          {
            title: "Réactions de précipitation",
            path: "F-03",
          },
          {
            title: "Réactions de complexation",
            path: "F-04",
          },
          {
            title: "Méthodes d'extractions",
            path: "F-05",
          },
          {
            title: "Méthodes séparatives instrumentales",
            path: "F-06",
          },
          {
            title: "Méthodes spectroscopiques",
            path: "F-07",
          },
        ],
      },
      {
        specialty: "Biophysique",
        lessons: [
          {
            title:
              "Les interactions des rayonnements ionisants avec la matière",
            path: "F-08",
          },
          {
            title: "La radiobiologie remplace les radiolésions de l'ADN",
            path: "F-09",
          },
          {
            title: "La radioprotection",
            path: "F-10",
          },
          {
            title: "les Lasers et leur applications médicales",
            path: "F-11",
          },
          {
            title: "Les ultrasons et leurs applications médicales",
            path: "F-12",
          },
        ],
      },
      {
        specialty: "Génétique",
        lessons: [
          {
            title:
              "Génétique formelle: Monohybridisme, dihybridisme et lois de Mendel",
            path: "F-13",
          },
          {
            title:
              "Génétique humaine: Les modes de transmission des caractères (maladies)",
            path: "F-14",
          },
          {
            title: "Génétique moléculaire",
            path: "F-15",
          },
          {
            title: "Outils du génie génétique",
            path: "F-16",
          },
          {
            title: "Les mutations",
            path: "F-17",
          },
          {
            title: "Le polymorphisme",
            path: "F-18",
          },
          {
            title: "Notion de diagnostic génotypique",
            path: "F-19",
          },
          {
            title: "Pharmacogénétique",
            path: "F-20",
          },
        ],
      },
    ],
  };
  return <PathLayout {...fundamentals} />;
};

export default Fundamentals;
