
import React from "react";

const About = () => {
    const highlights = [
        { title: "Frontend", detail: "React, Next.js & Tailwind CSS" },
        { title: "Backend", detail: "Node.js & Express.js" },
        { title: "Database", detail: "MongoDB & MySQL" },
        { title: "Problem Solving", detail: "DSA & logical thinking" },
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#070b14] px-6 py-24 text-white sm:px-10 lg:px-20"
        >
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        Get to know me
                    </p>
                    <h2 className="text-4xl font-bold sm:text-5xl">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                        A little about my journey, my skills, and what I enjoy building.
                    </p>
                </div>

                <div className="grid items-center gap-14 md:grid-cols-2">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            MERN Stack Developer
                        </div>

                        <h3 className="mb-6 text-2xl font-bold leading-snug sm:text-3xl">
                            Building digital experiences
                            <span className="text-cyan-400"> with code.</span>
                        </h3>

                        <p className="mb-5 leading-8 text-slate-400">
                            I'm a developer passionate about building responsive,
                            user-friendly web applications. I enjoy solving problems,
                            learning new technologies, and turning ideas into real products.
                        </p>

                        <p className="mb-8 leading-8 text-slate-400">
                            My focus is on the MERN stack, along with Next.js and
                            relational databases like MySQL. I also practice DSA
                            to strengthen my problem-solving and programming skills.
                            I'm continuously improving through practical projects
                            and hands-on learning.
                        </p>

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                        >
                            Explore My Work
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {highlights.map((item, index) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg font-bold text-cyan-300">
                                    0{index + 1}
                                </div>

                                <h4 className="mb-3 text-lg font-semibold text-white">
                                    {item.title}
                                </h4>
                                <p className="text-sm leading-6 text-slate-400">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;