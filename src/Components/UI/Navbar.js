import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div
          className={`${styles.container} row justify-content-between align-items-center`}
        >
          <div className="col-6">
            <div className={styles.logo}>
              <NavLink to="/">
                <h1>GeoExplorer</h1>
              </NavLink>
            </div>
          </div>
          <div className="d-none d-md-flex col-md-6 justify-content-end">
            <ul className={`${styles.navUl}`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/facts">Facts</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 text-end d-md-none">
            <span onClick={showMenu} className={`${styles.menu}`}>
              <GiHamburgerMenu />
            </span>
            {show && (
              <div className={styles.hamMenu}>
                <ul className="m-0 p-0 text-start">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/facts">Facts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/country">Country</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
