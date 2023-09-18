import {
  mdiBookOpenPageVariantOutline,
  mdiCharity,
  mdiDevTo,
  mdiMenu,
  mdiMessageProcessing,
} from "@mdi/js";
import { default as Icon } from "@mdi/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const menuRef = useRef(null);
  const navRef = useRef(null);

  const toggleNavMenu = () => {
    menuRef.current.classList.toggle("-translate-x-full");
    navRef.current.classList.toggle("-translate-x-full");
  };

  return (
    <>
      <header className="flex w-full items-center justify-between border-b border-gray-700 bg-gray-900 px-4 py-2 text-neutral-200 md:px-20">
        <Link className="flex items-center" to="/">
          <img
            src={logo}
            alt="logo"
            className="mr-3 inline w-8 text-green-400"
          />
          <h1 className="hidden font-logo text-3xl font-bold md:inline">
            Discipulus
          </h1>
        </Link>
        <nav className="mx-8 hidden md:block">
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
        <button onClick={toggleNavMenu} className="md:hidden">
          <Icon path={mdiMenu} size={1.5} />
        </button>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 z-10 min-h-screen origin-left -translate-x-full bg-black bg-opacity-70 text-neutral-200 transition-transform delay-300 duration-300 ease-in-out md:hidden"
      >
        <div
          ref={navRef}
          className="min-h-full w-2/3 origin-left -translate-x-full bg-gray-800 px-4 py-2 transition-transform delay-500 duration-700 ease-in-out"
        >
          <button
            onClick={toggleNavMenu}
            className="absolute right-24 p-1 font-bold hover:border hover:border-neutral-200 focus:rounded-[50%] focus:border focus:border-neutral-200"
          >
            X
          </button>
          <Link onClick={toggleNavMenu} className="flex items-center" to="/">
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
                  onClick={toggleNavMenu}
                  to="/paths"
                  className="flex items-center gap-2 px-2 hover:text-green-400"
                >
                  <Icon path={mdiBookOpenPageVariantOutline} size={1} />
                  Parcours
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleNavMenu}
                  to="/extra"
                  className="flex items-center gap-2 px-2 hover:text-green-400"
                >
                  <Icon path={mdiCharity} size={1} /> Extra
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleNavMenu}
                  to="/tech"
                  className="flex items-center gap-2 px-2 hover:text-green-400"
                >
                  <Icon path={mdiDevTo} size={1} /> Technologies
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleNavMenu}
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
