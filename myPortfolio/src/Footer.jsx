import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" }, // Experience added here
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socials = [
        {
            name: "GitHub",
            handle: "rohitsisodiya07",
            url: "https://github.com/rohitsisodiya07",
            icon: "GH",
        },
        {
            name: "LinkedIn",
            handle: "rohit-sisodiya25",
            url: "https://www.linkedin.com/in/rohit-sisodiya25/",
            icon: "in",
        },
        {
            name: "LeetCode",
            handle: "RohitSisodiya07",
            url: "https://leetcode.com/u/RohitSisodiya07/",
            icon: "</>",
        },
    ];

    // --- Framer Motion Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        },
    };

    return (
        <footer className="relative overflow-hidden bg-[#070b14] px-5 pb-6 pt-16 text-white sm:px-8 lg:px-16">

            {/* Ambient background glows */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]"
            />

            {/* Animated Gradient Top Line */}
            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent bg-[length:200%_auto]"
            />

            <div className="relative mx-auto max-w-7xl z-10">

                {/* Main Footer Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]"
                >

                    {/* 1. Brand Section */}
                    <motion.div variants={itemVariants}>
                        <a
                            href="#home"
                            className="inline-flex items-center text-3xl font-black tracking-tight"
                        >
                            Rohit
                            <motion.span
                                animate={{ opacity: [1, 0.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-cyan-400"
                            >
                            </motion.span>
                        </a>

                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                            Full Stack Developer
                        </p>

                        <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                            Turning ideas into interactive digital
                            experiences. I build modern web applications
                            with clean code, thoughtful design, and
                            attention to detail.
                        </p>

                        <motion.a
                            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(34,211,238,0.1)" }}
                            whileTap={{ scale: 0.98 }}
                            href="mailto:rohitsisodiya2503@gmail.com"
                            className="group mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 pr-5 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-300 transition-colors group-hover:bg-cyan-400 group-hover:text-slate-900">
                                ✉
                            </span>

                            <span className="min-w-0">
                                <span className="block text-[10px] uppercase tracking-wider text-slate-500">
                                    Drop an Email
                                </span>
                                <span className="break-all text-sm font-medium text-slate-200 transition group-hover:text-cyan-300">
                                    rohitsisodiya2503@gmail.com
                                </span>
                            </span>
                            <span className="ml-2 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300">
                                ↗
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* 2. Navigation Section */}
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
                            <span className="h-5 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                            Explore
                        </h3>

                        <ul className="space-y-4">
                            {navLinks.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                                    >
                                        <span className="text-[10px] font-mono tabular-nums text-slate-600 transition-colors group-hover:text-cyan-400">
                                            0{index + 1}
                                        </span>
                                        <span className="relative transition-transform duration-300 group-hover:translate-x-2">
                                            {link.name}
                                            {/* Hover indicator line */}
                                            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                                        </span>
                                        <span className="opacity-0 text-cyan-400 text-xs transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                                            ✦
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* 3. Social Cards Section */}
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
                            <span className="h-5 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                            Let's Connect
                        </h3>

                        <div className="space-y-3">
                            {socials.map((social) => (
                                <motion.a
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] shadow-sm hover:shadow-[0_5px_15px_rgba(34,211,238,0.1)]"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0f172a] text-sm font-bold text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                            {social.icon}
                                        </span>

                                        <span className="min-w-0">
                                            <span className="block text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                                                {social.name}
                                            </span>
                                            <span className="mt-0.5 block truncate text-[11px] text-slate-500 transition-colors group-hover:text-cyan-300/70">
                                                {social.handle}
                                            </span>
                                        </span>
                                    </div>

                                    <span className="ml-2 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300">
                                        ↗
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center justify-between gap-5 pt-6 text-center sm:flex-row sm:text-left"
                >
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-slate-300">
                            Rohit Sisodiya
                        </span>
                        . All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white/[0.02] px-4 py-1.5 rounded-full border border-white/5">
                        <span>Designed & Built with</span>
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                        >
                            ♥
                        </motion.span>
                        <span>using React & Tailwind</span>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#home"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-400/5"
                    >
                        Back to top
                        <motion.span
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-sm transition group-hover:text-cyan-400"
                        >
                            ↑
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;