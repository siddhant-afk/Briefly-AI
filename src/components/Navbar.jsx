import Logo from "../assets/logo.png";
import TopicBar from "./TopicBar";

function Navbar() {
  return (
    <nav className="flex items-center justify-center  navbar">
      <div className="navbar-content">
        <img src={Logo} alt="Briefly" className="w-25 object-cover  mt-3" />
        <span className="text-4xl text-red-700"> | </span>
        <div className="topics">
          <TopicBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
