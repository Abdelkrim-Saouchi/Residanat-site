import { useLoaderData } from "react-router-dom";
import ChemSvg from "../components/ChemSvg";
import PathLayout from "../components/PathLayout";
import { data } from "../data/data";

export const loader = ({ params }) => {
  return data[params.pathId];
};

const Fundamentals = () => {
  const fundamentals = useLoaderData();
  return <PathLayout svg={<ChemSvg />} {...fundamentals} />;
};

export default Fundamentals;
