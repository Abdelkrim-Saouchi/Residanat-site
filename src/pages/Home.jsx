import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex min-h-screen justify-center bg-gray-900 px-20 text-neutral-200">
      <div className="mt-20 flex max-w-3xl flex-col items-center gap-8">
        <h2 className="text-center text-5xl font-bold">
          Votre
          <span className="text-green-400">
            {" "}
            Parcours vers la résidanat
          </span>{" "}
          commence ici
        </h2>
        <p className="w-2/3 text-center opacity-80">
          Ce site web propose une vaste collection de cours en ligne destinés à
          vous aider à réussir le concours de résidanat dans le domaine
          pharmaceutique.
        </p>
        <Link
          className="rounded border border-neutral-200 px-6 py-2 font-bold hover:bg-gray-600"
          to="/paths"
        >
          Voir les cours
        </Link>
      </div>
    </main>
  );
};

export default Home;
