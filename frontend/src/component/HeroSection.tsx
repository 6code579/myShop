import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <>
    <section
      id="section"
      className={`bg-blue-100 shadow-lg : ""
      } font-poppins`}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
            alt="Logo"
          />
        </Link>

        {/* Menu */}
        <nav
          id="menu"
          className={`items-center justify-center max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden transition-[width] max-md:bg-white/70 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-semibold ${
            menuOpen ? "max-md:w-full max-md:h-full" : "max-md:w-0"
          }`}
        >
          <Link className="hover:text-indigo-600" to="/products">
            Produits
          </Link>
          <Link className="hover:text-indigo-600" to="/a-propos">
            À propos
          </Link>
          <Link className="hover:text-indigo-600" to="/prix">
            Tarifs
          </Link>
          <Link className="hover:text-indigo-600" to="/contact">
            Contact
          </Link>

          {/* Bouton fermer (mobile) */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        {/* Panier + Connexion */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Panier */}
          <div className="relative cursor-pointer">
            <ShoppingCart className="text-gray-700 w-6 h-6 hover:text-indigo-600 transition" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              2
            </span>
          </div>
          {/* Login / Signup */}
          <Link
            className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
            to="/login"
          >
            Connexion
          </Link>
          <Link
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
            to="/signup"
          >
            Inscription
          </Link>
        </div>

        {/* Bouton open menu (mobile) */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    </section>
    
   <Outlet/>
    </>
  );
};

export default HeroSection;
