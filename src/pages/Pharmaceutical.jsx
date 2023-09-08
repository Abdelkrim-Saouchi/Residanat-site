import PathLayout from "../components/PathLayout";
import PharmSvg from "../components/PharmSvg";

const Pharmaceutical = () => {
  const pharmaceutical = {
    svg: <PharmSvg />,
    title: "Sciences Pharmaceutiques",
    overview:
      "Ces disciplines forment l'essence même du métier de pharmacien ! La pharmacologie, la pharmacognosie, la toxicologie, et bien d'autres, sont des matières fascinantes qui confèrent au pharmacien sa singularité et sa polyvalence.",
  };
  return <PathLayout {...pharmaceutical} />;
};

export default Pharmaceutical;
