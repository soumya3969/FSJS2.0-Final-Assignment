
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <p className="text-xl font-bold">WEBSITE</p>
        <h1 className="text-lg font-bold mx-4">Your Website</h1>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost w-20 h-20" onClick={handleToggle}>
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              checked={theme === "dark"}
              readOnly
              className="w-200 h-200 "
            />
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-8 h-8"
            />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

