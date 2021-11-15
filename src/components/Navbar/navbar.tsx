import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/">
          <h1>TopCars</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topcars-navbar"
          aria-controls="topcars-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topcars-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Catalog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
