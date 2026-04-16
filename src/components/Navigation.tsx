import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Главная" },
    { to: "/catalog", label: "Каталог" },
    { to: "/contacts", label: "Контакты" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-gold flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <div className="w-2 h-2 bg-gold -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <span className="font-display text-2xl font-light tracking-[0.15em] text-foreground">
              ЛАБИРИНТ
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 link-underline ${
                  location.pathname === to
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors">
              <Icon name="Search" size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors relative">
              <Icon name="ShoppingBag" size={18} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-[10px] text-primary-foreground flex items-center justify-center rounded-full font-bold">
                3
              </span>
            </button>
          </div>

          <button
            className="md:hidden text-muted-foreground hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center gap-10 md:hidden">
          {links.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              style={{ animationDelay: `${i * 0.1}s` }}
              className={`opacity-0-init animate-fade-up font-display text-5xl font-light tracking-wide ${
                location.pathname === to ? "text-gold" : "text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
