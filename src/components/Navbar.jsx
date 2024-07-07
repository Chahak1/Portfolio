import logo from "../assets/asdf.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="no-bg flex flex-shrink-0 items-center">
        <img className="mx-2 w-10"src={logo} alt="logo"></img>
    </div>
    <div className=" mt-0 m-2 flex items-center justify-center gap-4 text-2px">
        <FaLinkedin />
        <FaGithub />
        </div>

  </nav>
};

export default Navbar;
