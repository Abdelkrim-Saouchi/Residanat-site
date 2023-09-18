import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PathCard = ({ pathName, path, svg, desc }) => {
  return (
    <div className="flex w-full flex-col rounded-xl border border-gray-700 bg-gray-800 sm:w-9/12 md:w-full md:max-w-3xl ">
      <div className="relative flex items-center justify-center p-6 after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:bg-gray-700 md:justify-between">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mr-2 rounded-full bg-gray-700 p-2">{svg}</div>
          <h3 className="text-2xl font-bold md:ml-8">{pathName}</h3>
        </div>
        <Link
          to={path}
          className="hidden rounded-md bg-gray-600 px-8 py-2 hover:bg-gray-500 md:block"
        >
          Explorer
        </Link>
      </div>
      <p className="p-6 opacity-75">{desc}</p>
      <Link
        to={path}
        className="mb-6 self-center rounded-md bg-gray-600 px-8 py-2 hover:bg-gray-500 md:hidden"
      >
        Explorer
      </Link>
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
