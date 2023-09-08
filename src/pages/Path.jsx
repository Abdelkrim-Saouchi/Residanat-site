import BioSvg from "../components/BioSvg";
import ChemSvg from "../components/ChemSvg";
import PathCard from "../components/PathCard";
import PharmSvg from "../components/PharmSvg";

const Path = () => {
  const fundamentals = {
    pathName: "Fondamentales",
    path: "fundamentals",
    svg: <ChemSvg />,
    desc: "La carrière de pharmacie débute ici, où le pharmacien doit posséder une solide base de connaissances en mathématiques, en physique et en chimie. De nombreux candidats soutiennent que la maîtrise des fondamentaux est cruciale pour réussir le concours de résidanat.",
  };

  const pharmaceutical = {
    pathName: "Pharmaceutiques",
    path: "pharmaceutical",
    svg: <PharmSvg />,
    desc: "Ces disciplines forment l'essence même du métier de pharmacien ! La pharmacologie, la pharmacognosie, la toxicologie, et bien d'autres, sont des matières fascinantes qui confèrent au pharmacien sa singularité et sa polyvalence.",
  };

  const biology = {
    pathName: "Biologiques",
    path: "biology",
    svg: <BioSvg />,
    desc: "Être pharmacien signifie prendre soin de l'humain, et prendre soin de l'humain implique une maîtrise de la biologie. Les sciences biologiques constituent l'un des piliers incontournables de la formation du pharmacien, qui en fait un professionnel de la santé indispensable.",
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 px-20 py-10 text-neutral-200">
      <h2 className="text-2xl font-bold">Parcours</h2>
      <PathCard {...fundamentals} />
      <PathCard {...pharmaceutical} />
      <PathCard {...biology} />
    </main>
  );
};

export default Path;
