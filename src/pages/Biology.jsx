import BioSvg from "../components/BioSvg";
import PathLayout from "../components/PathLayout";

const Biology = () => {
  const biology = {
    svg: <BioSvg />,
    title: "Sciences Biologiques",
    overview:
      "Être pharmacien signifie prendre soin de l'humain, et prendre soin de l'humain implique une maîtrise de la biologie. Les sciences biologiques constituent l'un des piliers incontournables de la formation du pharmacien, qui en fait un professionnel de la santé indispensable.",
    content: [
      {
        specialty: "Biochimie",
        lessons: [
          {
            title: "Exploration du métabolisme des glucides",
            path: "B-01",
          },
          {
            title: "Exploration du métabolisme des lipides",
            path: "B-02",
          },
          {
            title: "Exploration du métabolisme des protides",
            path: "B-03",
          },
          {
            title: "Exploration fonctionnelle rénale",
            path: "B-04",
          },
          {
            title: "exploration biochimique de la thyroïde",
            path: "B-05",
          },
          {
            title: "Exploration du métabolisme hydrominéral",
            path: "B-06",
          },
          {
            title: "Exploration du métabolisme phosphocalcique",
            path: "B-07",
          },
          {
            title: "les enzymes sériques",
            path: "B-08",
          },
          {
            title: "Exploration fonctionnelle du foie",
            path: "B-09",
          },
          {
            title: "Biochimie de l'hémolyse",
            path: "B-10",
          },
          {
            title: "Les marqueurs cardiaques",
            path: "B-11",
          },
        ],
      },
      {
        specialty: "Micorobiologie",
        lessons: [
          {
            title: "Paroi bactérienne: structure et fonction",
            path: "B-12",
          },
          {
            title: "Antiseptiques et désinfectants",
            path: "B-13",
          },
          {
            title: "infections liées aux soins",
            path: "B-14",
          },
          {
            title: "diagnostic au laboratoire d'une pneumopathie aigue",
            path: "B-15",
          },
          {
            title:
              "Antibiotiques: classification, mode d'action, résistance et étude au Laboratoire",
            path: "B-16",
          },
          {
            title: "Diagnostic au laboratoire d'une méningite",
            path: "B-17",
          },
          {
            title:
              "Diagnostic au laboratoire d'une tuberculose et tests de sensibilité",
            path: "B-18",
          },
          {
            title: "Diagnostic au laboratoire d'une infection entérique",
            path: "B-19",
          },
          {
            title: "Diagnostic au laboratoire d'une infection urinaire",
            path: "B-20",
          },
          {
            title: "Diagnostic au laboratoire d'une septicémie",
            path: "B-21",
          },
          {
            title: "Diagnostic au laboratoire d'une MST",
            path: "B-22",
          },
          {
            title: "Diagnostic au laboratoire d'une infection à VIH",
            path: "B-23",
          },
          {
            title: "Diagnostic au laboratoire des hépatites virales",
            path: "B-24",
          },
          {
            title: "les vaccins",
            path: "B-25",
          },
          {
            title:
              "le virus grippal, structure, diagnostic, traitement et prévention",
            path: "B-26",
          },
        ],
      },
      {
        specialty: "Parasitologie",
        lessons: [
          {
            title: "Amibiase",
            path: "B-27",
          },
          {
            title: "Leishmanioses",
            path: "B-28",
          },
          {
            title: "Toxoplasmose",
            path: "B-29",
          },
          {
            title: "Paludisme",
            path: "B-30",
          },
          {
            title: "Bilharzioses",
            path: "B-31",
          },
          {
            title: "Cestodes parasites à l'état larvaire",
            path: "B-32",
          },
          {
            title: "Nématodes intestinaux",
            path: "B-33",
          },
          {
            title: "Mycoses superficielles",
            path: "B-34",
          },
          {
            title: "Aspergilloses",
            path: "B-35",
          },
          {
            title: "Distomatoses",
            path: "B-36",
          },
          {
            title: "Cryptococcoses",
            path: "B-37",
          },
          {
            title: "Mycetomes sporotrichose",
            path: "B-38",
          },
        ],
      },
      {
        specialty: "Hémobiologie",
        lessons: [
          {
            title: "La lignée érythroblastique",
            path: "B-39",
          },
          {
            title: "Diagnostic biologique des anémies",
            path: "B-40",
          },
          {
            title: "La lignée granulocytaire",
            path: "B-41",
          },
          {
            title: "La lignée lymphoïde",
            path: "B-42",
          },
          {
            title: "Physiologie de l'Hémostase",
            path: "B-43",
          },
          {
            title: "Hémophilie",
            path: "B-44",
          },
          {
            title: "Les groupes sanguins érythrocytaires",
            path: "B-45",
          },
        ],
      },
    ],
  };

  return <PathLayout {...biology} />;
};

export default Biology;
