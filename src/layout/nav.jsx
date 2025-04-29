import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="w-full ">
      <nav className="flex justify-around px-3 md:px-10 my-3 w-full">
        <Link to="/" className="font-bold text-3xl hover:text-black">
          Raufossfotballens Utflyttede venner
        </Link>

        <div className="flex gap-4 items-center">
          {!isHome && (
            <Link to="/" className="text-base text-gray-600 hover:text-black">
              Til forsiden
            </Link>
          )}
          <NavLink
            to="/bli-medlem"
            className="navlink text-xl text-black font-regular"
          >
            Bli medlem
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
