import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PathCard = ({ pathName, path, svg, desc }) => {
  return (
    <div className="max-w-3xl rounded-xl border border-gray-700 bg-gray-800 ">
      <div className="relative flex items-center justify-between p-6 after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:bg-gray-700">
        <div className="flex items-center">
          <div className="mr-2 rounded-full bg-gray-700 p-2">{svg}</div>
          <h3 className="ml-8 text-2xl font-bold">{pathName}</h3>
        </div>
        <Link
          to={path}
          className="rounded-md bg-gray-600 px-8 py-2 hover:bg-gray-500"
        >
          Explorer
        </Link>
      </div>
      <p className="p-6 opacity-75">{desc}</p>
    </div>
  );
};

PathCard.propTypes = {
  pathName: PropTypes.string,
  path: PropTypes.string,
  svg: PropTypes.element,
  desc: PropTypes.string,
};

export default PathCard;
