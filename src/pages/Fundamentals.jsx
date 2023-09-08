import ChemSvg from "../components/ChemSvg";
import PathLayout from "../components/PathLayout";

const Fundamentals = () => {
  const fundamentals = {
    svg: <ChemSvg />,
    title: "Sciences Fondamentales",
    overview:
      "Ces disciplines forment l'essence même du métier de pharmacien ! La pharmacologie, la pharmacognosie, la toxicologie, et bien d'autres, sont des matières fascinantes qui confèrent au pharmacien sa singularité et sa polyvalence.",
  };
  return <PathLayout {...fundamentals} />;
};

export default Fundamentals;
