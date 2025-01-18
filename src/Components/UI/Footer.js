import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css"; // Importing the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.contactInfo} row`}>
          <div className="col-12 col-md-4 d-lg-flex justify-content-start">
            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <MdPlace />
              </div>
              <div className={styles.text}>
                <p className={styles.contactTitle}>Address</p>
                <p className={styles.contactDetails}>Pune, Maharshtra</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-lg-flex justify-content-center">
            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <IoCallSharp />
              </div>
              <div className={styles.text}>
                <p className={styles.contactTitle}>Phone</p>
                <p className={styles.contactDetails}>+91 7083260649</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-lg-flex justify-content-end">
            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <TbMailPlus />
              </div>
              <div className={styles.text}>
                <p className={styles.contactTitle}>Email</p>
                <p className={styles.contactDetails}>
                  manojrpatil1000@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.footerBottom} row`}>
          <div
            className={`${styles.copyrightSection} col-12 text-center col-lg-6 text-lg-start`}
          >
            <p className={styles.copyrightText}>
              &copy; 2024, All Rights Reserved by{" "}
              <NavLink
                to="https://thapatechnical.shop/"
                target="_blank"
                className={styles.link}
              >
                Manoj Patil
              </NavLink>
            </p>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <ul className="">
              <li>
                <NavLink to="/" className={styles.link}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/facts" className={styles.link}>
                  Facts
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className={styles.link}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={styles.link}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
