import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <div className="flex space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white font-mono">
            FLASHCARDS 📰
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black bg-yellow-300 hover:border-black hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-300 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700"
          >
            LOGIN
          </button>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-yellow-300"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 text-yellow-300 bg-black rounded md:bg-transparent md:text-yellow-300 md:dark:text-yellow-300"
                aria-current="page"
              >
                Decks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
