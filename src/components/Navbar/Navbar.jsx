import "./navbar.css";
import aluraLogo from "../../assets/logoalura.svg";
import casita from "../../assets/casita.svg";
import add from "../../assets/add.svg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar background">
      <img className="logoalura" src={aluraLogo} alt="logo de alura flix" />

      <div className="buttons-container desktop">
        <Link to="/" className="button home-button">
          Home
        </Link>

        <Link to="/upload" className="button video-buton">
          Nuevo video
        </Link>
      </div>

      <div className="mobile">
        <Link className="casita">
          <img src={casita} alt="casita" />
        </Link>
        <Link className="add">
          <img src={add} alt="add icon" />
          <p>Nuevo video</p>
        </Link>
      </div>
    </div>
  );
};
