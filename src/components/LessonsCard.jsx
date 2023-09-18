import { mdiBookOpenVariant } from "@mdi/js";
import Icon from "@mdi/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LessonsCard = ({ specialty, lessons }) => {
  return (
    <div className="w-full rounded-xl border border-gray-700 bg-gray-800 md:w-2/3">
      <h3 className="relative px-8 py-4 text-xl font-bold after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:bg-gray-700">
        {specialty}
      </h3>
      <div className="px-4 py-2">
        {lessons.map((lesson, index) => (
          <Link
            to={lesson.path}
            key={index}
            className="my-2 flex items-center gap-4 rounded-xl px-4 py-4 hover:bg-gray-600"
          >
            <div>
              <Icon path={mdiBookOpenVariant} size={1} className="opacity-75" />
            </div>
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

LessonsCard.propTypes = {
  specialty: PropTypes.string,
  lessons: PropTypes.array,
};

export default LessonsCard;
