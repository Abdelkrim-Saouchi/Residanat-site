import { useLoaderData } from "react-router-dom";
import BioSvg from "../components/BioSvg";
import ChemSvg from "../components/ChemSvg";
import PathLayout from "../components/PathLayout";
import PharmSvg from "../components/PharmSvg";
import { data } from "../data/data";

export const loader = ({ params }) => {
  return data[params.pathId];
};

const PathPage = () => {
  const path = useLoaderData();

  if (path.path === "fundamentals")
    return <PathLayout svg={<ChemSvg />} {...path} />;
  if (path.path === "pharmaceutical")
    return <PathLayout svg={<PharmSvg />} {...path} />;
  return <PathLayout svg={<BioSvg />} {...path} />;
};

export default PathPage;
