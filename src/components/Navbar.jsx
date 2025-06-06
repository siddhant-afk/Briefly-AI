import { useState } from "react";
import Logo from "../assets/logo.png";
import TopicBar from "./TopicBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-center  navbar">
      <div className="navbar-content">
        <img
          src={Logo}
          alt="Briefly"
          className=" logo w-25 object-cover  mt-3"
        />
        <span className="text-4xl text-red-700 hidden md:block"> | </span>
        <div className="topics">
          <TopicBar isOpen={isOpen} />
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="hamburger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
