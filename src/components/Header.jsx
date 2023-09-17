import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" flex items-center justify-between border-b border-gray-700 bg-gray-900 px-20 py-2 text-neutral-200">
      <Link className="flex items-center" to="/">
        <img src={logo} alt="logo" className="mr-3 inline w-8 text-green-400" />
        <h1 className="inline font-logo text-3xl font-bold">Discipulus</h1>
      </Link>
      <nav className="mx-8">
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
    </header>
  );
};

export default Header;
