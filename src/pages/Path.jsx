import ChemSvg from "../components/ChemSvg";
import PathCard from "../components/PathCard";

const Path = () => {
  const fundamentals = {
    pathName: "Fondamentales",
    path: "/fundamentals",
    svg: <ChemSvg />,
    desc: "La carrière de pharmacie débute ici, où le pharmacien doit posséder une solide base de connaissances en mathématiques, en physique et en chimie. De nombreux candidats soutiennent que la maîtrise des fondamentaux est cruciale pour réussir le concours de résidanat.",
  };
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 px-20 text-neutral-200">
      <h2 className="text-2xl font-bold">Parcours</h2>
      <PathCard {...fundamentals} />
    </main>
  );
};

export default Path;
