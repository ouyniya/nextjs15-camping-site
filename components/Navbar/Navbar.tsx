"use client";

import { motion } from "framer-motion";
import { DarkMode } from "./DarkMode";
import DropdownList from "./DropdownList";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between sm:flex-row sm:items-center gap-2 items-center z-50">
        {/* logo */}
        <Logo />
        {/* Darkmode & profile */}

        <div className="flex gap-7 justify-center items-center font-bold opacity-75 z-50">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -80, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-10">
              <Link href="/" className="hover:text-primary duration-300">
                Home
              </Link>
              <a href="/search" className="hover:text-primary duration-300">
                Search
              </a>
              <Link
                href="/contact"
                className="hover:text-primary duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex gap-4 sm:items-center">
          <DarkMode />
          <DropdownList />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
