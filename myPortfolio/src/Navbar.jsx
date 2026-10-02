
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const links = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ];

    useEffect(() => {
        const updateActive = () => {
            const sections = links
                .map((link) => document.querySelector(link.path))
                .filter(Boolean);

            let current = "#home";

            sections.forEach((section) => {
                if (section.getBoundingClientRect().top <= 150) {
                    current = `#${section.id}`;
                }
            });

            setActiveLink(current);
        };

        window.addEventListener("scroll", updateActive);
        updateActive();

        return () => window.removeEventListener("scroll", updateActive);
    }, []);

    const closeMenu = (path) => {
        setMenuOpen(false);
        setActiveLink(path);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
            <nav
                className="relative mx-auto flex max-w-6xl items-center justify-between
        rounded-2xl border border-white/[0.09]
        bg-[#090f1d]/80 px-4 py-3
        shadow-[0_12px_50px_rgba(0,0,0,0.35)]
        backdrop-blur-2xl sm:px-6"
            >
                {/* BRAND */}
                <a
                    href="#home"
                    onClick={() => closeMenu("#home")}
                    className="group flex items-center gap-3"
                >
                    <div
                        className="relative flex h-10 w-10 items-center justify-center
            overflow-hidden rounded-xl bg-gradient-to-br
            from-cyan-400 via-blue-500 to-violet-600
            shadow-lg shadow-blue-500/20 transition duration-300
            group-hover:rotate-3 group-hover:scale-105"
                    >
                        <span className="text-xl font-black text-white">R</span>
                        <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
                    </div>

                    <div className="leading-tight">
                        <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
                            Rohit<span className="text-cyan-400">.</span>
                        </p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            MERN Developer
                        </p>
                    </div>
                </a>

                {/* DESKTOP LINKS */}
                <div
                    className="hidden items-center gap-1 rounded-full
          border border-white/[0.05] bg-white/[0.025] p-1 lg:flex"
                >
                    {links.map((link) => {
                        const isActive = activeLink === link.path;

                        return (
                            <a
                                key={link.path}
                                href={link.path}
                                onClick={() => closeMenu(link.path)}
                                className={`relative rounded-full px-4 py-2.5
                text-[13px] font-medium transition-all duration-300
                ${isActive
                                        ? "bg-white/[0.09] text-white"
                                        : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                                    }`}
                            >
                                {isActive && (
                                    <span className="absolute bottom-1 left-1/2 h-1 w-1
                    -translate-x-1/2 rounded-full bg-cyan-400" />
                                )}
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* DESKTOP CTA */}
                <a
                    href="#contact"
                    onClick={() => closeMenu("#contact")}
                    className="group hidden items-center gap-2 rounded-xl
          bg-gradient-to-r from-blue-600 to-violet-600
          px-5 py-3 text-sm font-semibold text-white
          shadow-lg shadow-blue-950/30 transition duration-300
          hover:-translate-y-0.5 hover:from-cyan-500
          hover:to-blue-600 hover:shadow-cyan-500/20 lg:inline-flex"
                >
                    Let's Talk
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        ↗
                    </span>
                </a>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    className="flex h-10 w-10 flex-col items-center
          justify-center gap-[5px] rounded-xl border
          border-white/10 bg-white/[0.04] transition
          hover:bg-white/[0.09] lg:hidden"
                >
                    <span
                        className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* MOBILE MENU */}
            <div
                id="mobile-menu"
                aria-hidden={!menuOpen}
                className={`mx-auto max-w-6xl overflow-hidden transition-all
        duration-300 lg:hidden ${menuOpen
                        ? "mt-3 max-h-[500px] translate-y-0 opacity-100"
                        : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
                    }`}
            >
                <div className="rounded-2xl border border-white/[0.09]
          bg-[#090f1d]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                    <div className="mb-2 px-4 pb-2 pt-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Navigation
                        </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        {links.map((link, index) => {
                            const isActive = activeLink === link.path;

                            return (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    tabIndex={menuOpen ? 0 : -1}
                                    onClick={() => closeMenu(link.path)}
                                    className={`flex items-center justify-between
                  rounded-xl px-4 py-3.5 text-sm font-medium
                  transition-all duration-200 ${isActive
                                            ? "border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-300"
                                            : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                                        }`}
                                >
                                    <span>{link.name}</span>
                                    <span className={`text-xs ${isActive ? "text-cyan-400" : "text-slate-600"
                                        }`}>
                                        0{index + 1}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    <div className="mt-3 border-t border-white/[0.08] pt-3">
                        <a
                            href="#contact"
                            tabIndex={menuOpen ? 0 : -1}
                            onClick={() => closeMenu("#contact")}
                            className="flex w-full items-center justify-center gap-2
              rounded-xl bg-gradient-to-r from-blue-600 to-violet-600
              py-3.5 text-sm font-semibold text-white transition
              hover:from-cyan-500 hover:to-blue-600"
                        >
                            Let's Talk <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;