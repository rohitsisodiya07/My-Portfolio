import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Experience", path: "#experience" },
        { name: "Skills", path: "#skills" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

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

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = (path) => {
        setMenuOpen(false);
        setActiveLink(path);
    };

    // Mobile Menu Animation Variants
    const menuVars = {
        initial: { opacity: 0, y: -20, scale: 0.95 },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    const linkVars = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
        >
            <nav
                className={`relative mx-auto flex max-w-5xl items-center justify-between
                rounded-full border px-3 py-2.5 transition-colors duration-500
                ${scrolled
                        ? "border-white/10 bg-[#030712]/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl"
                        : "border-transparent bg-transparent"
                    }`}
            >
                {/* BRAND LOGO */}
                <a
                    href="#home"
                    onClick={() => closeMenu("#home")}
                    className="group flex items-center gap-3 pl-2"
                >
                    <div
                        className="relative flex h-9 w-9 items-center justify-center
                        overflow-hidden rounded-full bg-gradient-to-br
                        from-cyan-400 to-blue-600 ring-1 ring-white/20
                        shadow-lg shadow-cyan-500/20 transition-transform duration-300
                        group-hover:scale-110"
                    >
                        <span className="text-lg font-bold text-white relative z-10">R</span>
                        {/* Spinning glow effect on hover */}
                        <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </div>

                    <div className="leading-none hidden sm:block">
                        <p className="text-lg font-bold tracking-tight text-white">
                            Rohit<motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-cyan-400"
                            ></motion.span>
                        </p>
                    </div>
                </a>

                {/* DESKTOP LINKS (With Sliding Indicator) */}
                <div
                    className="hidden items-center gap-1 rounded-full
                    border border-white/5 bg-white/[0.03] p-1 md:flex"
                >
                    {links.map((link) => {
                        const isActive = activeLink === link.path;

                        return (
                            <a
                                key={link.path}
                                href={link.path}
                                onClick={() => closeMenu(link.path)}
                                className="relative rounded-full px-5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 z-10"
                            >
                                <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}>
                                    {link.name}
                                </span>

                                {/* Magic Sliding Background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-full bg-white/10 shadow-sm"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* DESKTOP CTA */}
                <a
                    href="#contact"
                    onClick={() => closeMenu("#contact")}
                    className="group hidden items-center gap-2 rounded-full
                    bg-white px-5 py-2.5 text-sm font-semibold text-[#090f1d]
                    transition-all duration-300 hover:scale-105 hover:bg-cyan-50 
                    hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] md:inline-flex"
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
                    className="flex h-10 w-10 flex-col items-center
                    justify-center gap-[4px] rounded-full bg-white/5 
                    border border-white/10 transition-colors
                    hover:bg-white/10 md:hidden z-50"
                >
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="h-[2px] w-4 rounded-full bg-slate-200"
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="h-[2px] w-4 rounded-full bg-slate-200"
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="h-[2px] w-4 rounded-full bg-slate-200"
                    />
                </button>
            </nav>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute left-4 right-4 mx-auto max-w-5xl overflow-hidden rounded-2xl origin-top md:hidden mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#090f1d]/95 backdrop-blur-2xl"
                    >
                        <div className="p-4">
                            <div className="mb-3 px-2">
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                                    Menu
                                </p>
                            </div>

                            <div className="flex flex-col gap-1">
                                {links.map((link) => {
                                    const isActive = activeLink === link.path;

                                    return (
                                        <motion.a
                                            variants={linkVars}
                                            key={link.path}
                                            href={link.path}
                                            onClick={() => closeMenu(link.path)}
                                            className={`flex items-center justify-between
                                            rounded-xl px-4 py-3.5 text-sm font-medium
                                            transition-all duration-200 ${isActive
                                                    ? "bg-cyan-500/10 text-cyan-400"
                                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                                                }`}
                                        >
                                            {link.name}
                                            {isActive && <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="text-cyan-400 text-lg"
                                            >✦</motion.span>}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            <motion.div variants={linkVars} className="mt-4 pt-4 border-t border-white/10">
                                <a
                                    href="#contact"
                                    onClick={() => closeMenu("#contact")}
                                    className="flex w-full items-center justify-center gap-2
                                    rounded-xl bg-white py-3.5 text-sm font-semibold text-[#090f1d] 
                                    transition hover:bg-cyan-50 hover:scale-[1.02]"
                                >
                                    Let's Talk <span>↗</span>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;