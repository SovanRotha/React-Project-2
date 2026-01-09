import Logo from "../Images/CamFlix-Logo.png";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Let's Explore", path: "/Explore" },
  ];

  return (
    <header className="dark:bg-gray-800 bg-gray-800 p-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Search */}
        <input
          type="text"
          placeholder="Search Movies Here..."
          className="hidden md:block bg-gray-600 p-2 rounded-md text-white w-64"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-lg font-semibold hover:text-blue-600"
                  : "text-white text-lg font-semibold hover:text-gray-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Toggle />
        </div>

        {/* Mobile Hamburger + Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Toggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden text-center">
          <input
            type="text"
            placeholder="Search Movies Here..."
            className="bg-gray-600 p-2 rounded-md text-white mb-2"
          />
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-lg font-semibold"
                  : "text-white text-lg font-semibold hover:text-gray-300"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
