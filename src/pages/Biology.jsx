import { useLoaderData } from "react-router-dom";
import BioSvg from "../components/BioSvg";
import PathLayout from "../components/PathLayout";
import { data } from "../data/data";

export const loader = ({ params }) => {
  return data[params.pathId];
};

const Biology = () => {
  const biology = useLoaderData();

  return <PathLayout svg={<BioSvg />} {...biology} />;
};

export default Biology;
