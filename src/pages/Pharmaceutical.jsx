import { useLoaderData } from "react-router-dom";
import PathLayout from "../components/PathLayout";
import PharmSvg from "../components/PharmSvg";
import { data } from "../data/data";

export const loader = ({ params }) => {
  return data[params.pathId];
};

const Pharmaceutical = () => {
  const pharmaceutical = useLoaderData();

  return <PathLayout svg={<PharmSvg />} {...pharmaceutical} />;
};

export default Pharmaceutical;
