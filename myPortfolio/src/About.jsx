import React from "react";
import { motion } from "framer-motion";

const About = () => {
    const highlights = [
        { title: "Frontend", detail: "React, Next.js & Tailwind CSS" },
        { title: "Backend", detail: "Node.js & Express.js" },
        { title: "Database", detail: "MongoDB & MySQL" },
        { title: "Problem Solving", detail: "DSA & logical thinking" },
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 15 }
        },
    };

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#070b14] px-6 py-24 text-white sm:px-10 lg:px-20"
        >
            {/* Animated Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // Trigger jab section view me aaye
                variants={containerVariants}
                className="relative mx-auto max-w-6xl z-10"
            >
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.p variants={itemVariants} className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400 flex items-center justify-center gap-2">
                        <span className="w-10 h-[1px] bg-cyan-400/50"></span>
                        Get to know me
                        <span className="w-10 h-[1px] bg-cyan-400/50"></span>
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="text-4xl font-bold sm:text-5xl tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-400">
                        A little about my journey, my skills, and what I enjoy building.
                    </motion.p>
                </div>

                <div className="grid items-center gap-14 md:grid-cols-2">
                    {/* Left Column (Text & Button) */}
                    <motion.div variants={containerVariants}>
                        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            MERN Stack Developer
                        </motion.div>

                        <motion.h3 variants={itemVariants} className="mb-6 text-3xl font-bold leading-snug sm:text-4xl">
                            Building digital experiences
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> with code.</span>
                        </motion.h3>

                        <motion.p variants={itemVariants} className="mb-5 text-base leading-8 text-slate-400">
                            I'm a developer passionate about building responsive,
                            user-friendly web applications. I enjoy solving problems,
                            learning new technologies, and turning ideas into real products.
                        </motion.p>

                        <motion.p variants={itemVariants} className="mb-8 text-base leading-8 text-slate-400">
                            My focus is on the MERN stack, along with Next.js and
                            relational databases like MySQL. I also practice DSA
                            to strengthen my problem-solving and programming skills.
                            I'm continuously improving through practical projects
                            and hands-on learning.
                        </motion.p>

                        <motion.a
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(34,211,238,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 transition-all duration-300"
                        >
                            Explore My Work
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                aria-hidden="true"
                            >
                                →
                            </motion.span>
                        </motion.a>
                    </motion.div>

                    {/* Right Column (Highlight Cards) */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.03,
                                    y: -5,
                                    borderColor: "rgba(34, 211, 238, 0.4)",
                                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4), 0px 0px 20px rgba(34, 211, 238, 0.1)"
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1222]/80 backdrop-blur-sm p-6 transition-colors duration-300 hover:bg-[#111a30]"
                            >
                                {/* Hover Glow Effect inside card */}
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-[40px] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg font-black text-cyan-300 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                                    0{index + 1}
                                </div>

                                <h4 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                                    {item.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    {item.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;