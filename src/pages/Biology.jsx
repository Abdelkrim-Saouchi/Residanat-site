import BioSvg from "../components/BioSvg";
import PathLayout from "../components/PathLayout";

const Biology = () => {
  const biology = {
    svg: <BioSvg />,
    title: "Sciences Biologiques",
    overview:
      "Être pharmacien signifie prendre soin de l'humain, et prendre soin de l'humain implique une maîtrise de la biologie. Les sciences biologiques constituent l'un des piliers incontournables de la formation du pharmacien, qui en fait un professionnel de la santé indispensable.",
  };

  return <PathLayout {...biology} />;
};

export default Biology;
