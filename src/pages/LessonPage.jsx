import ChemSvg from "../components/ChemSvg";
import DownloadBar from "../components/DownloadBar";

const LessonPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 px-20 py-10 text-neutral-200">
      <div className="w-2/3">
        <div className="flex items-center gap-6">
          <ChemSvg />
          <div>
            <h2 className="text-2xl font-bold">Réactions acido-basiques</h2>
            <h3 className="font-bold opacity-60">Sciences Fondamentales</h3>
          </div>
        </div>
        <DownloadBar
          label="Cours 2023"
          path="2023/fondamentales/genetique/cours/07. La Régulation.ppt"
        />
      </div>
    </main>
  );
};

export default LessonPage;
