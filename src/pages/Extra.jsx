import { useLoaderData } from "react-router-dom";
import { extra } from "../data/extra";

export const loader = () => {
  return extra;
};

const Extra = () => {
  const data = useLoaderData();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 px-4 text-neutral-200 md:px-20">
      <h2 className="mt-10 text-center text-3xl font-bold">
        Sources supplémentaires:
      </h2>
      <div className="my-10 block w-fit rounded-md border border-gray-700 bg-gray-800 p-6">
        {data.links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            target="_blank"
            rel="noreferrer"
            className="mb-4 block text-lg font-bold text-green-400 hover:text-yellow-400"
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Extra;
