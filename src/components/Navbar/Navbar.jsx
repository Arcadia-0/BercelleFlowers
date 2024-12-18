import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";
import logo from "../../assets/logo.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="" />
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className="text-5xl " href="#about">HOME</a>
          </li>
          <li>
            <a className="text-5xl" href="#experience">PREMIUM</a>
          </li>
          <li>
            <a className="text-5xl" href="#projects">PRODUCTS</a>
          </li>
          <li>
            <a className="text-5xl" href="#projects">DISCOUNTS</a>
          </li>
          <li>
            <a className="text-5xl" href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};