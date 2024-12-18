"use client";

import { Button } from "@/components/ui/button";
import { Image, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navigationLinks } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Framer Motion animation variants
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <header className="z-50 relative">
      <div className="max-w-6xl mx-auto py-2 px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/illustrations/logo.png" width={50} alt="logo" />
        </Link>

        {/* Navigation Links for Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {navigationLinks.map((link) => (
            <li key={link.label} className="cursor-pointer">
              <Link
                href={link.href}
                className="text-black font-medium hover:text-blue-700 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Get in Touch Button for Desktop */}
        <div className="hidden lg:block">
          <Link href="/get_quotes" className="text-sm bg-blue-700 py-3 px-5 text-white rounded-md font-semibold hover:bg-blue-800">
            Get in Touch
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <Button
            className="bg-blue-700 text-white px-3 py-2 rounded-md"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineMenuAlt4 className="text-xl" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 z-[9999] bg-white h-full w-full"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 pt-5">
              {/* Close Button */}
              <div className="flex mb-5 justify-end">
                <Button
                  className="[&_svg]:size-6 rounded-full px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>
              {/* Links */}
              <ul className="flex flex-col gap-6">
                {navigationLinks.map((link) => (
                  <li key={link.label} className="cursor-pointer">
                    <Link
                      href={link.href}
                      className="text-black font-medium hover:text-blue-700 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Button */}
              <Link onClick={() => setIsMenuOpen(false)} href="/get_quotes" className="mt-4 text-sm bg-blue-700 py-3 w-full text-white rounded-md font-semibold hover:bg-blue-800 flex items-center justify-center">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
