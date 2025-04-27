import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full ">
      <nav className="flex justify-around px-3 md:px-10 my-3 w-full">
        <Link to="/" className="font-bold text-3xl hover:text-black">
          Raufossfotballens Utflyttede venner
        </Link>
        <NavLink
          to="/bli-medlem"
          className="navlink text-xl text-black font-regular"
        >
          Bli medlem
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
