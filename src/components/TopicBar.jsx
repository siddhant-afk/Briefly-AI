import { NavLink } from "react-router-dom";

function TopicBar({ isOpen }) {
  return (
    <section
      className={`topics flex justify-center mt-2 ${isOpen ? "open" : ""}`}
    >
      <ul className={` nav-links flex gap-12 justify-center p-2    `}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="business"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Business
          </NavLink>
        </li>
        <li>
          <NavLink
            to="technology"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Tech
          </NavLink>
        </li>
        <li>
          <NavLink
            to="entertainment"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Entertainment
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lifestyle"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Lifestyle
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default TopicBar;
