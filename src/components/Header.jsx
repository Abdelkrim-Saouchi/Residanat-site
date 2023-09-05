import { mdiAccountSchoolOutline } from "@mdi/js";
import Icon from "@mdi/react";

const Header = () => {
  return (
    <header className=" flex items-center justify-between border-b-2 border-emerald-300 bg-neutral-900 px-20 text-neutral-200">
      <div className="flex items-center">
        <Icon
          className="mr-3 inline w-8 text-emerald-300"
          path={mdiAccountSchoolOutline}
        />
        <h1 className="font-logo inline text-3xl font-bold">Discipulus</h1>
      </div>
      <nav className="space-x-4">
        <ul className="flex items-center justify-between gap-8">
          <li>
            <a href="" className="hover:text-emerald-300">
              Cours
            </a>
          </li>
          <li>
            <a href="" className="hover:text-emerald-300">
              Extra
            </a>
          </li>
          <li>
            <a href="" className="hover:text-emerald-300">
              Technologies
            </a>
          </li>
          <li>
            <a href="" className="hover:text-emerald-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
