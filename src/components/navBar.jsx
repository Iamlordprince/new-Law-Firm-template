
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import image1 from "../assets/img1.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-[#021023] text-white p-1">
      <div className="flex min-h-[100px] items-center justify-between gap-z px-2 py-2 md:px-5 lg:h-[130px] lg:px-6">

        {/* Logo */}
        <img
          src={image1}
          alt="Logo"
          className="h-[75px] w-auto shrink-0 object-contain sm:h-[90px] lg:ml-2 lg:h-[130px] "
        />

        {/* Desktop and tablet navigation */}
        <div className="hidden items-center gap-5 font-bold lg:flex xl:gap-8">
          <a href="#" className="whitespace-nowrap hover:text-[#D7A13B]">Home▾</a>
          <a href="#" className="whitespace-nowrap hover:text-[#D7A13B]">Practical Area▾</a>
          <a href="#" className="whitespace-nowrap hover:text-[#D7A13B]">Page▾</a>
          <a href="#" className="hover:text-[#D7A13B]">About</a>
          <a href="#" className="hover:text-[#D7A13B]">Blog</a>
          <a href="#" className="hover:text-[#D7A13B]">Contact</a>
        </div>

        {/* Phone details */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex xl:mr-10 2xl:mr-[100px]">
          <i className="ri-phone-fill text-4xl text-[#D7A13B]"></i>
          <div>
            <p>Need Help ?</p>
            <a href="tel:12003009000" className="font-bold">
              1200 300 9000
            </a>
          </div>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-white/20 text-3xl hover:text-[#D7A13B] lg:hidden"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile and tablet menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-[#021023] px-5 py-3 shadow-xl lg:hidden">
          {[
            "Home",
            "Practical Area",
            "Page",
            "About",
            "Blog",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 font-bold transition-colors hover:pl-2 hover:text-[#D7A13B]"
            >
              {item}
              {["Home", "Practical Area", "Page"].includes(item) && " ▾"}
            </a>
          ))}

          <div className="flex items-center gap-3 py-4">
            <i className="ri-phone-fill text-3xl text-[#D7A13B]"></i>
            <div>
              <p>Need Help ?</p>
              <a href="tel:12003009000" className="font-bold">
                1200 300 9000
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
