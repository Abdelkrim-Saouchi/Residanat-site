import { mdiAccountSchoolOutline } from "@mdi/js";
import Icon from "@mdi/react";

const Header = () => {
  return (
    <header className=" flex items-center justify-between px-20">
      <div className="flex items-center">
        <Icon className="mr-3 inline w-8" path={mdiAccountSchoolOutline} />
        <h1 className="font-logo inline text-3xl font-bold">Discipulus</h1>
      </div>
      <nav className="space-x-4">
        <ul className="flex items-center justify-between gap-8">
          <li>
            <a href="">Cours</a>
          </li>
          <li>
            <a href="">Extra</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
