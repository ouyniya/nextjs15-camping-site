import { DarkMode } from "./DarkMode";
import DropdownList from "./DropdownList";
import Logo from "./Logo";
import SearchMenu from "./SearchMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between sm:flex-row sm:items-center gap-2">
        {/* logo */}
        <Logo />
        {/* search */}
        <SearchMenu />
        {/* Darkmode & profile */}
        <div className="flex gap-4 sm:items-center">
          <DarkMode />
          <DropdownList />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
