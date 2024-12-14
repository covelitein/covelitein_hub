import { Image, Link } from "@nextui-org/react";
import React from "react";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const Footer = () => (
  <footer className="bg-blue-600 text-white py-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-sm:text-sm">
      {/* Column 1 */}
      <div>
        {/* logo start */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/illustrations/logo.png" width={60} alt="logo" />
        </Link>
        {/* logo end */}
        <h3 className="text-lg font-semibold mb-4">Coveliteins Hub</h3>
        <p className="text-white">
          We specialize in creating innovative digital solutions to help
          businesses grow and succeed in a tech-driven world.
        </p>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li>
            <a href="#" className="text-white hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-white">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-white">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-white">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <p className="text-white">
          Email: <a href="mailto:support@example.com">coveliteinshub@gmail.com</a>
        </p>
        <p className="text-white">Phone: +234-809-625-9176</p>
        <div className="flex space-x-4 mt-4">
          {/* Facebook */}
          <Link href="https://web.facebook.com/profile.php?id=61570121349465" className="text-white hover:text-white">
            <FaSquareFacebook className="text-3xl" />
          </Link>
          {/* Twitter */}
          <Link href="https://x.com/coveliteinzHub" className="text-white hover:text-white">
            <FaXTwitter className="text-3xl" />
          </Link>
          {/* Instagram */}
          <Link href="https://www.instagram.com/coveliteinzhub" className="text-white hover:text-white">
            <FaSquareInstagram className="text-3xl" />
          </Link>
          {/* WhatsApp */}
          <Link href="#" className="text-white hover:text-white">
            <FaSquareWhatsapp className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-sm px-3">
      &copy; {new Date().getFullYear()} Covelitein&apos;s Hub. All Rights
      Reserved.
    </div>
  </footer>
);

export default Footer;
