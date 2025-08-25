import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import Curriculo from "../../public/assets/Currículo Marielen.pdf"

const sections = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Projetos", path: "/projetos" },
  { label: "Contato", path: "/contato" },
] as const;

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <ul className="hidden md:flex gap-6 items-center">
          {sections.map((s) => (
            <li key={s.path}>
              <Link
                to={s.path}
                className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {s.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href={Curriculo}
              target="_blank"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 
                         font-medium hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              <Download className="w-5 h-5" />
              Baixar Currículo
            </a>
          </li>
        </ul>

        {/* Dark mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
