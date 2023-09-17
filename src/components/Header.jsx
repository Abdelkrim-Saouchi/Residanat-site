import {
  mdiBookOpenPageVariantOutline,
  mdiCharity,
  mdiDevTo,
  mdiMenu,
  mdiMessageProcessing,
} from "@mdi/js";
import { default as Icon } from "@mdi/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <header className="flex w-full items-center justify-between border-b border-gray-700 bg-gray-900 px-4 py-2 text-neutral-200 md:px-20">
        <Link className="flex items-center" to="/">
          <img
            src={logo}
            alt="logo"
            className="mr-3 inline w-8 text-green-400"
          />
          <h1 className="inline hidden font-logo text-3xl font-bold">
            Discipulus
          </h1>
        </Link>
        <nav className="mx-8 hidden">
          <ul className="flex items-center justify-between gap-8">
            <li>
              <Link to="/paths" className="hover:text-green-400">
                Parcours
              </Link>
            </li>
            <li>
              <Link to="/extra" className="hover:text-green-400">
                Extra
              </Link>
            </li>
            <li>
              <Link to="/tech" className="hover:text-green-400">
                Technologies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button>
          <Icon path={mdiMenu} size={1.5} />
        </button>
      </header>
      <div className="fixed inset-0 z-10 min-h-screen bg-black bg-opacity-50 text-neutral-200">
        <div className="min-h-full w-3/4 bg-gray-800 px-4 py-2">
          <Link className="flex items-center" to="/">
            <img
              src={logo}
              alt="logo"
              className="mr-3 inline w-8 text-green-400"
            />
            <h1 className="inline font-logo text-3xl font-bold">Discipulus</h1>
          </Link>
          <nav className="mt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/paths"
                  className="flex items-center gap-2 px-2 hover:text-green-400"
                >
                  <Icon path={mdiBookOpenPageVariantOutline} size={1} />
                  Parcours
                </Link>
              </li>
              <li>
                <Link
                  to="/extra"
                  className="flex items-center gap-2 px-2 hover:text-green-400"
                >
                  <Icon path={mdiCharity} size={1} /> Extra
                </Link>
              </li>
              <li>
                <Link
                  to="/tech"
                  className="flex items-center gap-2 px-2 hover:text-green-400"
                >
                  <Icon path={mdiDevTo} size={1} /> Technologies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-2 hover:text-green-400"
                >
                  <Icon path={mdiMessageProcessing} size={1} />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
