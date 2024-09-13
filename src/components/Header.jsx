import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="color border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              SSLynx
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#details"
                  className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-primary-700 lg:p-0"
                >
                  Details
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-primary-700 lg:p-0"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
