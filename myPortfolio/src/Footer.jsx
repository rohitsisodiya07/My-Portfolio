
import React from "react";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
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

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#070b14] px-5 pb-6 pt-16 text-white sm:px-8 lg:px-16">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[110px]" />

            {/* Gradient top line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="relative mx-auto max-w-7xl">
                {/* Main footer */}
                <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]">

                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="inline-block text-3xl font-black tracking-tight"
                        >
                            Rohit
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                .
                            </span>
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

                        <a
                            href="mailto:rohitsisodiya2503@gmail.com"
                            className="group mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-lg text-cyan-300">
                                ✉
                            </span>

                            <span className="min-w-0">
                                <span className="block text-xs text-slate-500">
                                    Email me at
                                </span>
                                <span className="break-all text-sm font-medium text-slate-200 transition group-hover:text-cyan-300">
                                    rohitsisodiya2503@gmail.com
                                </span>
                            </span>
                            <span className="ml-1 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300">
                                ↗
                            </span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
                            <span className="h-5 w-1 rounded-full bg-cyan-400" />
                            Explore
                        </h3>

                        <ul className="space-y-4">
                            {navLinks.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                                    >
                                        <span className="text-[10px] tabular-nums text-slate-600 transition group-hover:text-cyan-400">
                                            0{index + 1}
                                        </span>
                                        <span className="transition group-hover:translate-x-1">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social cards */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
                            <span className="h-5 w-1 rounded-full bg-cyan-400" />
                            Let's Connect
                        </h3>

                        <div className="space-y-3">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#111b2b] text-sm font-bold text-cyan-300 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                                            {social.icon}
                                        </span>

                                        <span className="min-w-0">
                                            <span className="block text-sm font-semibold text-slate-200">
                                                {social.name}
                                            </span>
                                            <span className="mt-1 block truncate text-xs text-slate-500">
                                                {social.handle}
                                            </span>
                                        </span>
                                    </div>

                                    <span className="ml-2 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-slate-300">
                            Rohit Sisodiya
                        </span>
                        . All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>Designed & Built with</span>
                        <span className="text-cyan-300">♥</span>
                        <span>using React & Tailwind</span>
                    </div>

                    <a
                        href="#home"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                        Back to top
                        <span className="transition group-hover:-translate-y-1">
                            ↑
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;