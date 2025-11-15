import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import Container from "./Container.jsx";

const links = [
  { href: "/", label: "Home", type: "route", section: "home" },
  { href: "/#about", label: "About", type: "hash", section: "about" },
  { href: "/projects", label: "Projects", type: "route", section: "projects" },
  { href: "/#contact", label: "Contact", type: "hash", section: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeHash, setActiveHash] = useState(window.location.hash);

  // ⭐ Prevent observer from interfering during manual scroll
  const manualScroll = useRef(false);

  const handleClose = () => setOpen(false);

  // ⭐ AUTO-DETECT SECTION ON SCROLL
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "projects-page", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        if (manualScroll.current) return; // prevent override during manual scroll

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            const id = entry.target.id;

            if (id === "home") {
              setActiveHash("");
              window.history.replaceState(null, "", "/");
              return;
            }

            if (id === "projects" || id === "projects-page") {
              setActiveHash("#projects");
              window.history.replaceState(null, "", "/#projects");
              return;
            }

            setActiveHash(`#${id}`);
            window.history.replaceState(null, "", `/#${id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // ⭐ ACTIVE STATE LOGIC
  const isLinkActive = (link) => {
    if (link.section === "projects") {
      return (
        activeHash === "#projects" ||
        location.pathname.startsWith("/projects")
      );
    }

    if (link.type === "hash") {
      return location.pathname === "/" && activeHash === `#${link.section}`;
    }

    if (link.href === "/") {
      return location.pathname === "/" && activeHash === "";
    }

    return location.pathname.startsWith(link.href);
  };

  const linkClasses = (isActive) =>
    `group relative text-sm font-medium transition-colors duration-200 after:absolute after:left-0 after:top-full after:mt-1 after:h-[2px] after:w-full after:origin-center after:rounded-full after:bg-light-accent after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:text-light-foreground hover:after:scale-x-100 dark:after:bg-dark-accent ${
      isActive
        ? "text-light-accent after:scale-x-100 dark:text-dark-accent"
        : "text-light-subtle after:scale-x-0 dark:text-dark-subtle dark:hover:text-dark-foreground"
    }`;

  const mobileLinkClasses = (isActive) =>
    `block text-base font-medium transition-colors duration-200 ${
      isActive
        ? "text-light-accent dark:text-dark-accent"
        : "text-light-foreground hover:text-light-accent dark:text-dark-foreground dark:hover:text-dark-accent"
    }`;

  // ⭐ NAVIGATION HANDLER
  const handleNavigation = (event, link) => {
    if (link.type === "hash") {
      event.preventDefault();
      const hash = link.section;

      manualScroll.current = true;

      const scrollToSection = () => {
        const sec = document.getElementById(hash);
        if (sec) {
          const offset = 80;
          const top =
            sec.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });

          setTimeout(() => {
            manualScroll.current = false;
          }, 600);
        }
      };

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToSection, 100);
      } else {
        setTimeout(scrollToSection, open ? 350 : 50); // FIX FOR MOBILE MENU
      }

      setActiveHash(`#${hash}`);
      window.history.replaceState(null, "", `/#${hash}`);

      handleClose();
      return;
    }

    // ⭐ ROUTE LINKS
    manualScroll.current = true;
    setActiveHash("");
    window.history.replaceState(null, "", "/");

    setTimeout(() => {
      manualScroll.current = false;
    }, 400);

    handleClose();
  };

  const homeLink = {
    href: "/",
    label: "Portfolio",
    type: "route",
    section: "home",
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-light-surface/80 shadow-glass backdrop-blur-glass transition-colors duration-300 dark:bg-dark-surface/80">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-tight text-light-foreground transition-colors hover:text-light-accent dark:text-dark-foreground dark:hover:text-dark-accent"
            onClick={(e) => handleNavigation(e, homeLink)}
          >
            <span className="rounded-full bg-light-accent/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.2em] text-light-accent dark:bg-dark-accent/10 dark:text-dark-accent">
              Portfolio
            </span>
          </NavLink>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = isLinkActive(link);

              if (link.type === "route") {
                return (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={linkClasses(active)}
                    onClick={(e) => handleNavigation(e, link)}
                  >
                    {link.label}
                  </NavLink>
                );
              }

              return (
                <button
                  key={link.href}
                  type="button"
                  className={linkClasses(active)}
                  onClick={(e) => handleNavigation(e, link)}
                >
                  {link.label}
                </button>
              );
            })}
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-light-foreground/10 bg-light-surface/60 text-light-foreground transition-all duration-200 hover:border-light-accent/50 hover:text-light-accent focus:outline-none focus:ring-2 focus:ring-light-accent/50 dark:border-dark-foreground/10 dark:bg-dark-surface/60 dark:text-dark-foreground dark:hover:border-dark-accent/50 dark:hover:text-dark-accent dark:focus:ring-dark-accent/50 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-light-foreground/10 bg-light-surface/90 shadow-lg backdrop-blur-xl transition-colors dark:border-dark-foreground/10 dark:bg-dark-surface/90 md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-4 py-6">
                {links.map((link) => {
                  const active = isLinkActive(link);

                  if (link.type === "route") {
                    return (
                      <li key={link.href}>
                        <NavLink
                          to={link.href}
                          className={mobileLinkClasses(active)}
                          onClick={(e) => handleNavigation(e, link)}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    );
                  }

                  return (
                    <li key={link.href}>
                      <button
                        type="button"
                        className={mobileLinkClasses(active)}
                        onClick={(e) => handleNavigation(e, link)}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
