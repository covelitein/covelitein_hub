import { Image, Link } from "@nextui-org/react";
import React from "react";

const Footer = () => (
  <footer className="bg-blue-600 text-white py-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
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
          Email: <a href="mailto:support@example.com">support@example.com</a>
        </p>
        <p className="text-white">Phone: +1 234 567 890</p>
        <div className="flex space-x-4 mt-4">
          {/* Facebook */}
          <a href="#" className="text-white hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12v-9.294H9.297v-3.622H12V8.413c0-2.697 1.636-4.172 4.02-4.172 1.14 0 2.118.084 2.401.122v2.785H15.76c-1.216 0-1.451.578-1.451 1.424v1.867h2.899l-.378 3.622h-2.52V24h4.946C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="#" className="text-white hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.207-4.928 4.928 0 .387.043.764.127 1.124C7.688 8.094 4.064 6.13 1.64 3.161c-.424.724-.667 1.565-.667 2.475 0 1.709.87 3.215 2.188 4.098-.808-.026-1.566-.248-2.228-.617v.062c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.626 1.956 2.444 3.38 4.6 3.42-1.685 1.32-3.808 2.107-6.115 2.107-.397 0-.788-.023-1.175-.069C2.292 21.883 5.003 23 7.941 23c9.485 0 14.678-7.854 14.678-14.678 0-.223-.005-.445-.015-.665.998-.721 1.865-1.623 2.549-2.653z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-white hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.055 2.276.24 3.109.511a5.92 5.92 0 012.17 1.414 5.92 5.92 0 011.414 2.17c.271.833.456 1.903.511 3.109.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.206-.24 2.276-.511 3.109a5.92 5.92 0 01-1.414 2.17 5.92 5.92 0 01-2.17 1.414c-.833.271-1.903.456-3.109.511-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.055-2.276-.24-3.109-.511a5.92 5.92 0 01-2.17-1.414 5.92 5.92 0 01-1.414-2.17c-.271-.833-.456-1.903-.511-3.109-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.206.24-2.276.511-3.109a5.92 5.92 0 011.414-2.17 5.92 5.92 0 012.17-1.414c.833-.271 1.903-.456 3.109-.511C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.014 7.052.072 5.697.13 4.439.387 3.417.72 2.16 1.125.912 2.285.51 3.417.196 4.44-.06 5.698.073 7.052.014 8.332 0 8.736 0 12c0 3.264.014 3.668.072 4.948.13 1.354.387 2.612.72 3.634.405 1.257 1.565 2.506 2.687 3.105.724.423 1.57.667 2.488.78C8.736 24 8.332 24 12 24c3.264 0 3.668-.014 4.948-.072 1.354-.13 2.612-.387 3.634-.72 1.257-.405 2.506-1.565 3.105-2.687.423-.724.667-1.57.78-2.488.058-1.28.072-1.684.072-4.948s-.014-3.668-.072-4.948c-.13-1.354-.387-2.612-.72-3.634-.405-1.257-1.565-2.506-2.687-3.105-.724-.423-1.57-.667-2.488-.78C15.264 0 15.668 0 12 0z" />
              <circle cx="12" cy="12" r="3.5" />
              <path d="M15.9 4.6c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3.6-1.3 1.3-1.3 1.3.6 1.3 1.3z" />
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="#" className="text-white hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.427c-.287-.144-1.704-.84-1.967-.936-.264-.097-.455-.144-.646.144-.19.287-.74.936-.908 1.13-.167.191-.336.215-.623.072-.287-.144-1.212-.447-2.31-1.422-.855-.759-1.43-1.697-1.598-1.983-.167-.287-.018-.442.127-.585.13-.13.287-.336.43-.504.14-.167.191-.287.287-.479.096-.191.048-.36-.024-.504-.072-.144-.646-1.553-.886-2.13-.23-.553-.465-.478-.646-.478-.167-.016-.359-.024-.55-.024-.191 0-.5.072-.76.359-.264.287-.995 1.13-.995 2.756s1.02 3.2 1.162 3.423c.143.215 1.952 2.985 4.72 4.185.66.285 1.173.456 1.574.595.66.21 1.26.18 1.735.109.529-.079 1.704-.697 1.945-1.37.24-.672.24-1.247.167-1.37-.072-.12-.264-.191-.55-.336z" />
              <path d="M12.003 0C5.376 0 0 5.377 0 12.004c0 2.125.552 4.195 1.595 6.038l-1.647 6.002 6.155-1.596c1.8 1.015 3.847 1.55 5.898 1.55 6.627 0 12.004-5.377 12.004-12.004C24.007 5.376 18.63 0 12.003 0zm0 21.404c-1.9 0-3.797-.485-5.463-1.402-.145-.077-.305-.077-.44 0l-4.593 1.19 1.185-4.585c.084-.333.015-.691-.197-.957A10.64 10.64 0 012.601 12c0-5.197 4.207-9.404 9.402-9.404 5.2 0 9.407 4.207 9.407 9.404-.003 5.193-4.21 9.4-9.407 9.4z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-sm">
      &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
