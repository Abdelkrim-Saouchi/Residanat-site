import PropTypes from "prop-types";
import LessonsCard from "./LessonsCard";

const PathLayout = ({ svg, title, overview, content }) => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 px-20 py-10 text-neutral-200">
      <div className="flex flex-col items-center gap-4">
        {svg}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="w-2/3">
        <div>
          <h3 className="mb-2 text-xl font-bold">Aperçu :</h3>
          <p className="opacity-80">{overview}</p>
        </div>
      </div>
      {content.map((specialty, index) => (
        <LessonsCard key={index} {...specialty} />
      ))}
    </main>
  );
};

PathLayout.propTypes = {
  svg: PropTypes.element,
  title: PropTypes.string,
  overview: PropTypes.string,
  content: PropTypes.array,
};

export default PathLayout;
