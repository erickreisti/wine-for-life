import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDroplet, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Catalog", href: "#catalog" },
  { name: "New Features", href: "#features" },
  { name: "Blog", href: "#blog" },
  { name: "Where to buy", href: "#locale" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-100/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo - SEM animação */}
          <a href="#" className="flex items-center space-x-3">
            <FiDroplet className="h-10 w-10 text-primary-700" />
            <span className="text-2xl font-title font-bold text-primary-700">
              Wine for Life
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-title text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors relative group" // ADICIONADO: group
              >
                {item.name}
                {/* Underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-primary-200 transition-colors"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? (
                <FiMoon className="w-5 h-5 text-primary-600" />
              ) : (
                <FiSun className="w-5 h-5 text-primary-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-3 rounded-md hover:bg-primary-200 transition-colors"
              aria-label="Open menu"
            >
              <FiMenu className="w-8 h-8 text-primary-700" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary-100 z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary-200">
              <div className="flex items-center space-x-3">
                <FiDroplet className="h-10 w-10 text-primary-700" />
                <span className="text-2xl font-title font-bold text-primary-700">
                  Wine for Life
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-md hover:bg-primary-200 transition-colors"
                aria-label="Close menu"
              >
                <FiX className="w-8 h-8 text-primary-700" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col py-12 px-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-6 text-3xl font-title text-primary-700 hover:text-primary-600 border-b border-primary-200 relative group" // ADICIONADO: group
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  {/* Underline animation for mobile */}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Theme Toggle - Mobile */}
            <div className="flex justify-center p-8 border-t border-primary-200">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-3 px-6 py-3 rounded-full bg-primary-200 hover:bg-primary-300 transition-colors"
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                {theme === "light" ? (
                  <>
                    <FiMoon className="w-5 h-5 text-primary-700" />
                    <span className="text-primary-700 font-medium">
                      Dark Mode
                    </span>
                  </>
                ) : (
                  <>
                    <FiSun className="w-5 h-5 text-primary-700" />
                    <span className="text-primary-700 font-medium">
                      Light Mode
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
