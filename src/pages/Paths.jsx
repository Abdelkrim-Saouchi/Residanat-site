import { useLoaderData } from "react-router-dom";
import BioSvg from "../components/BioSvg";
import ChemSvg from "../components/ChemSvg";
import PathCard from "../components/PathCard";
import PharmSvg from "../components/PharmSvg";
import { data } from "../data/data";

export const loader = () => {
  return data;
};

const Paths = () => {
  const { fundamentals, pharmaceutical, biology } = useLoaderData();

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 px-20 py-10 text-neutral-200">
      <h2 className="text-2xl font-bold">Parcours</h2>
      <PathCard svg={<ChemSvg />} {...fundamentals} />
      <PathCard svg={<PharmSvg />} {...pharmaceutical} />
      <PathCard svg={<BioSvg />} {...biology} />
    </main>
  );
};

export default Paths;
