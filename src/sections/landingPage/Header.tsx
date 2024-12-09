import { Button, Image, Link } from "@nextui-org/react";
import React from "react";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-6xl mx-auto py-2 px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/illustrations/logo.png" width={50} alt="logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6">
          {["About", "Services", "Projects", "Reviews", "Pricing", "Blogs"].map((item) => (
            <li key={item} className="cursor-pointer">
              <Link className="text-black font-medium hover:text-blue-700 transition">{item}</Link>
            </li>
          ))}
        </ul>

        {/* Get in Touch Button */}
        <div className="hidden md:block">
          <Button className="text-sm bg-blue-700 py-2 px-5 text-white rounded-md font-semibold hover:bg-blue-800">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Button className="bg-blue-700 text-white px-4 py-2 rounded-md">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
