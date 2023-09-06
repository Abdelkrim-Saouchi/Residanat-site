import { mdiAccountSchoolOutline } from "@mdi/js";
import Icon from "@mdi/react";

const Header = () => {
  return (
    <header className=" flex items-center justify-between border-b border-neutral-300 bg-gray-900 px-20 py-2 text-neutral-200">
      <div className="flex items-center">
        <Icon
          className="mr-3 inline w-8 text-green-400"
          path={mdiAccountSchoolOutline}
        />
        <h1 className="font-logo inline text-3xl font-bold">Discipulus</h1>
      </div>
      <nav className="mx-8">
        <ul className="flex items-center justify-between gap-8">
          <li>
            <a href="" className="hover:text-green-400">
              Cours
            </a>
          </li>
          <li>
            <a href="" className="hover:text-green-400">
              Extra
            </a>
          </li>
          <li>
            <a href="" className="hover:text-green-400">
              Technologies
            </a>
          </li>
          <li>
            <a href="" className="hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
