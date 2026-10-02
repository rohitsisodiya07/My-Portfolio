
import React from "react";

const Skills = () => {
    const skillGroups = [
        {
            title: "Frontend Development",
            number: "01",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React.js",
                "Next.js",
                "Redux Toolkit",
                "Tailwind CSS",
            ],
        },
        {
            title: "Backend Development",
            number: "02",
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT Authentication",
                "bcrypt",
            ],
        },
        {
            title: "Database & Tools",
            number: "03",
            skills: [
                "MongoDB",
                "Mongoose",
                "Git",
                "GitHub",
                "Postman",
                "Axios",
                "Cloudinary",
            ],
        },
        {
            title: "Programming & DSA",
            number: "04",
            skills: [
                "Data Structures",
                "Algorithms",
                "Problem Solving",
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#070b14] px-6 py-24 text-white sm:px-10 lg:px-20"
        >
            <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        My Expertise
                    </p>

                    <h2 className="text-4xl font-bold sm:text-5xl">
                        Technical <span className="text-cyan-400">Skills</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                        Technologies and tools I use to build, develop,
                        and improve modern web applications.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div
                            key={group.number}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] sm:p-8"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold">
                                    {group.title}
                                </h3>

                                <span className="text-sm font-semibold tracking-widest text-cyan-400">
                                    {group.number}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;