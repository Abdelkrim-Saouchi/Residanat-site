import { useLoaderData, useNavigate } from "react-router-dom";
import BioSvg from "../components/BioSvg";
import ChemSvg from "../components/ChemSvg";
import DownloadBar from "../components/DownloadBar";
import PharmSvg from "../components/PharmSvg";
import { data } from "../data/data";
import { emds } from "../data/emds";
import { lessons } from "../data/lessons";

export const loader = ({ params }) => {
  const targetSpecialty = data[params.pathId].content.find((specialty) => {
    return specialty.lessons.find((lesson) => lesson.path === params.lessonId);
  });

  const targetLesson = targetSpecialty.lessons.find(
    (lesson) => lesson.path === params.lessonId,
  );

  const pathTitle = data[params.pathId].title;
  const lessonTitle = targetLesson.title;

  // if it'is QCM or EMD
  if (params.lessonId.includes("Q")) {
    const lesson = emds[params.lessonId];
    return { pathTitle, lessonTitle, lesson };
  }

  //if it's lessons
  const lesson = lessons[params.lessonId];
  return { pathTitle, lessonTitle, lesson };
};

const LessonPage = () => {
  const { pathTitle, lessonTitle, lesson } = useLoaderData();
  const navigate = useNavigate();

  let icon = null;

  if (pathTitle.includes("Fondamentales")) {
    icon = <ChemSvg />;
  } else if (pathTitle.includes("Pharmaceutique")) {
    icon = <PharmSvg />;
  } else {
    icon = <BioSvg />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 px-4 py-10 text-neutral-200 md:px-20">
      <div className="md:w-2/3">
        <div className="mb-14 flex flex-col items-center gap-6 md:flex-row">
          <button onClick={() => navigate(-1, { replace: true })}>
            {icon}
          </button>
          <div>
            <h2 className="text-center text-2xl font-bold md:text-left">
              {lessonTitle}
            </h2>
            <h3 className="text-center font-bold opacity-60 md:text-left">
              {pathTitle}
            </h3>
          </div>
        </div>
        {lesson.links.map((link, index) => (
          <DownloadBar key={index} label={link.label} path={link.path} />
        ))}
      </div>
    </main>
  );
};

export default LessonPage;
