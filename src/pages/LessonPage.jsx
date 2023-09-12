import ChemSvg from "../components/ChemSvg";

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
        <div className="mt-20 flex items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-4 py-2">
          <p className="font-semibold">cours 2023</p>
          <button className="rounded-md bg-emerald-800 px-2 py-1 font-semibold hover:bg-emerald-600">
            Télécharger
          </button>
        </div>
      </div>
    </main>
  );
};

export default LessonPage;
