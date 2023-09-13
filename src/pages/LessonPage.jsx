import { useLoaderData } from "react-router-dom";
import BioSvg from "../components/BioSvg";
import ChemSvg from "../components/ChemSvg";
import DownloadBar from "../components/DownloadBar";
import PharmSvg from "../components/PharmSvg";
import { data } from "../data/data";
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
  const lesson = lessons[params.lessonId];

  return { pathTitle, lessonTitle, lesson };
};

const LessonPage = () => {
  const { pathTitle, lessonTitle, lesson } = useLoaderData();

  let icon = null;
  if (pathTitle.includes("Fondamentales")) {
    icon = <ChemSvg />;
  } else if (pathTitle.includes("Pharmaceutique")) {
    icon = <PharmSvg />;
  } else {
    icon = <BioSvg />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 px-20 py-10 text-neutral-200">
      <div className="w-2/3">
        <div className="mb-14 flex items-center gap-6">
          {icon}
          <div>
            <h2 className="text-2xl font-bold">{lessonTitle}</h2>
            <h3 className="font-bold opacity-60">{pathTitle}</h3>
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
