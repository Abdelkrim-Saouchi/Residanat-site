import { mdiAccountSchoolOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex items-center justify-between border-b border-neutral-300 bg-gray-900 px-20 py-2 text-neutral-200">
      <Link className="flex items-center" to="/">
        <Icon
          className="mr-3 inline w-8 text-green-400"
          path={mdiAccountSchoolOutline}
        />
        <h1 className="font-logo inline text-3xl font-bold">Discipulus</h1>
      </Link>
      <nav className="mx-8">
        <ul className="flex items-center justify-between gap-8">
          <li>
            <Link to="/parcours" className="hover:text-green-400">
              Parcours
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-green-400">
              Extra
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-green-400">
              Technologies
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-green-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
