import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const skillGroups = [
        {
            title: "Frontend Development",
            number: "01",
            icon: "💻",
            skills: [
                "HTML5", "CSS3", "JavaScript (ES6+)", "React.js",
                "Next.js", "Redux Toolkit", "Tailwind CSS"
            ],
        },
        {
            title: "Backend Development",
            number: "02",
            icon: "⚙️",
            skills: [
                "Node.js", "Express.js", "REST APIs",
                "JWT", "bcrypt", "MongoDB"
            ],
        },
        {
            title: "Tools & Version Control",
            number: "03",
            icon: "🛠️",
            skills: [
                "Git", "GitHub", "Postman",
                "Axios", "Cloudinary", "Vercel"
            ],
        },
        {
            title: "Programming & Logic",
            number: "04",
            icon: "🧠",
            skills: [
                "Data Structures", "Algorithms", "C++",
                "Problem Solving", "Object Oriented Prog."
            ],
        },
    ];

    // --- Framer Motion Variants ---
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    const pillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
    };

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#070b14] px-6 py-24 text-white sm:px-10 lg:px-20"
        >
            {/* Animated Background Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[130px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
            />

            <div className="relative mx-auto max-w-6xl z-10">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                    className="mb-20 text-center"
                >
                    <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        <span className="h-[1px] w-8 bg-cyan-400/50"></span>
                        My Expertise
                        <span className="h-[1px] w-8 bg-cyan-400/50"></span>
                    </p>

                    <h2 className="text-4xl font-bold sm:text-5xl tracking-tight">
                        Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-400">
                        Technologies and tools I use to build, develop,
                        and improve modern web applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid gap-6 sm:grid-cols-2 lg:gap-8"
                >
                    {skillGroups.map((group) => (
                        <motion.div
                            key={group.number}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0c1222]/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-cyan-500/30 hover:bg-[#111a30]/80 sm:p-8"
                        >
                            {/* Inner Hover Glow */}
                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-[50px] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                            {/* Giant Watermark Number */}
                            <div className="absolute -bottom-4 -right-2 select-none text-[100px] font-black leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-cyan-400/[0.05]">
                                {group.number}
                            </div>

                            <div className="relative z-10 mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                        {group.icon}
                                    </span>
                                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                                        {group.title}
                                    </h3>
                                </div>
                                <span className="text-sm font-bold tracking-widest text-cyan-400/50">
                                    {group.number}
                                </span>
                            </div>

                            <motion.div
                                variants={containerVariants} // Inherits stagger for pills
                                className="relative z-10 flex flex-wrap gap-2.5"
                            >
                                {group.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={pillVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            backgroundColor: "rgba(34, 211, 238, 0.1)",
                                            borderColor: "rgba(34, 211, 238, 0.4)",
                                            color: "#67e8f9",
                                            boxShadow: "0px 5px 15px rgba(34, 211, 238, 0.15)"
                                        }}
                                        className="rounded-xl border border-white/10 bg-[#070b14]/50 px-4 py-2 text-sm font-medium text-slate-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;