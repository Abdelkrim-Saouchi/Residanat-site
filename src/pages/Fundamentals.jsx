import ChemSvg from "../components/ChemSvg";

const Fundamentals = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 px-20 py-10 text-neutral-200">
      <div className="flex flex-col items-center gap-4">
        <ChemSvg />
        <h2 className="text-3xl font-bold">Sciences Fondamentales</h2>
      </div>
      <div className="w-2/3">
        <div>
          <h3 className="mb-2 text-xl ">Aperçu :</h3>
          <p className="opacity-80">
            Ces disciplines forment l'essence même du métier de pharmacien ! La
            pharmacologie, la pharmacognosie, la toxicologie, et bien d'autres,
            sont des matières fascinantes qui confèrent au pharmacien sa
            singularité et sa polyvalence.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Fundamentals;
