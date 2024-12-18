import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaArrowUp } from "react-icons/fa";  

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true); // Show the button when scrolled 300px down
      } else {
        setShowBackToTop(false); // Hide the button when less than 300px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <nav className="p-4">
      {/* Logo and Menu */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Menu Items*/}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-8 justify-center items-center mt-4 lg:mt-0 text-center`}
      >
        <li>
          <a className="text-xl text-gray-800 hover:text-secondary" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a className="text-xl text-gray-800 hover:text-secondary" href="#premium">
            PREMIUM
          </a>
        </li>
        <li>
          <a className="text-xl text-gray-800 hover:text-secondary" href="#products">
            PRODUCTS
          </a>
        </li>
        <li>
          <a className="text-xl text-gray-800 hover:text-secondary" href="#discounts">
            DISCOUNTS
          </a>
        </li>
        <li>
          <a className="text-xl text-gray-800 hover:text-secondary" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition"
          aria-label="Back to top"
        >
          <FaArrowUp size={24} /> 
        </button>
      )}
    </nav>
  );
};
