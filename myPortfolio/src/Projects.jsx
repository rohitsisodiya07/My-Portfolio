import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        number: "01",
        title: "AuraStay",
        subtitle: "Hotel Management & Booking",
        category: "Full Stack",
        description:
            "A hotel and villa booking platform featuring dynamic property search, real-time room availability, temporary booking holds, coupon pricing, and role-based dashboards.",
        features: [
            "Real-time room availability",
            "Temporary booking holds",
            "Multi-role dashboards",
        ],
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "RBAC",
        ],
        image: "/projects/aurastay.png",
        imageAlt: "AuraStay hotel booking homepage",
        live: "https://hotel-management-two-delta.vercel.app/",
        github: "https://github.com/rohitsisodiya07/Hotel-Management",
        accent: "cyan",
        borderGlow: "hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]",
        badgeBg: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    },
    {
        number: "02",
        title: "AI Learning Platform",
        subtitle: "Skill Matcher & Study Assistant",
        category: "AI Powered",
        description:
            "An AI-powered learning platform that compares resumes with job descriptions, identifies missing skills, and generates personalized learning content using Gemini.",
        features: [
            "Resume-to-job matching",
            "AI chat with PDF",
            "Personalized study plans",
        ],
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Gemini API",
            "JWT",
        ],
        image: "/projects/ai-learning.png",
        imageAlt: "AI Learning Platform study dashboard",
        live: "https://ai-learning-app-kappa-orpin.vercel.app/",
        github: "https://github.com/rohitsisodiya07/Ai-Learning-App",
        accent: "purple",
        borderGlow: "hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]",
        badgeBg: "border-purple-400/30 bg-purple-400/10 text-purple-300",
    },
    {
        number: "03",
        title: "Task Manager",
        subtitle: "MERN Stack Application",
        category: "MERN Stack",
        description:
            "A task management application developed during my internship at Regex Software Services, demonstrating full-stack development, REST API integration, and database operations.",
        features: [
            "Interactive task dashboard",
            "REST API integration",
            "MongoDB data handling",
        ],
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        live: "https://task-manager-ecru-two.vercel.app/",
        github: "https://github.com/rohitsisodiya07/Task_Manager",
        accent: "emerald",
        borderGlow: "hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(52,211,153,0.15)]",
        badgeBg: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    },
];

const TaskPreview = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Complete project documentation", tag: "High", done: false },
        { id: 2, title: "Design UI for new feature", tag: "Medium", done: false },
        { id: 3, title: "Fix API integration issue", tag: "High", done: true },
    ]);
    const [filter, setFilter] = useState("All");

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    };

    const filteredTasks = tasks.filter((t) => {
        if (filter === "Pending") return !t.done;
        if (filter === "Completed") return t.done;
        return true;
    });

    return (
        <div className="min-h-[250px] select-none rounded-xl bg-slate-900/90 p-4 text-slate-200 border border-white/10 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-bold text-sm text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-xs text-slate-950 font-black">
                        ✓
                    </span>
                    Task Workspace
                </div>
                <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    Interactive
                </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">Status Overview</p>
                    <h4 className="text-base font-bold text-white">Sprint Board</h4>
                </div>
                <span className="rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 text-xs font-semibold">
                    3 Tasks
                </span>
            </div>

            {/* Filter Tabs */}
            <div className="mt-3 flex gap-1.5 text-[11px] font-medium">
                {["All", "Pending", "Completed"].map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => setFilter(tab)}
                        className={`rounded-md px-3 py-1 transition-all ${filter === tab
                                ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                                : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Interactive Tasks List */}
            <div className="mt-3 space-y-2">
                {filteredTasks.map((task) => (
                    <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 transition-colors hover:border-emerald-400/40 hover:bg-white/[0.07]"
                    >
                        <span
                            className={`flex h-4 w-4 items-center justify-center rounded text-[10px] transition-all ${task.done
                                    ? "bg-emerald-400 text-slate-950 font-bold shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                                    : "border border-slate-600 bg-slate-800"
                                }`}
                        >
                            {task.done ? "✓" : ""}
                        </span>

                        <span
                            className={`flex-1 text-[11px] transition-all ${task.done ? "text-slate-500 line-through" : "text-slate-200"
                                }`}
                        >
                            {task.title}
                        </span>

                        <span
                            className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${task.tag === "High"
                                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                                    : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                }`}
                        >
                            {task.tag}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.18, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 90, damping: 18 },
        },
    };

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#070b14] px-5 py-24 text-white sm:px-8 lg:px-16"
        >
            {/* Ambient Background Glows */}
            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[140px]"
            />

            <div className="relative mx-auto max-w-7xl z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        MY WORK
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        Turning ideas into real products through code, creativity, and problem-solving.
                    </p>
                </motion.div>

                {/* Project Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid items-stretch gap-7 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.number}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className={`group relative flex flex-col rounded-3xl border border-white/10 bg-[#0c1222]/85 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 ${project.borderGlow}`}
                        >
                            {/* Inner Corner Accent Glow */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/[0.03] blur-2xl transition-opacity duration-300 group-hover:bg-cyan-400/10" />

                            {/* Project Preview (Image or Interactive Mock) */}
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#060a12]">
                                {project.image ? (
                                    <div className="overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            loading="lazy"
                                            className="aspect-[4/3] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <TaskPreview />
                                )}

                                {/* Category Badge */}
                                <div className={`absolute bottom-3 left-3 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${project.badgeBg}`}>
                                    {project.category}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
                                <div className="mb-2 flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                                            {project.title}
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-cyan-300/90">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    <span className="text-sm font-black font-mono tracking-widest text-slate-600 transition-colors group-hover:text-cyan-400/70">
                                        {project.number}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {project.description}
                                </p>

                                {/* Features List */}
                                <div className="mt-5 space-y-2">
                                    {project.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-2.5 text-xs text-slate-300"
                                        >
                                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-400/10 text-cyan-300 text-[10px]">
                                                ✦
                                            </span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Technology Tags */}
                                <div className="mt-6 flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-lg border border-white/5 bg-[#070b14]/70 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors group-hover:border-white/10"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto flex items-center gap-2.5 pt-7">
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-3 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-md transition-all hover:brightness-110"
                                    >
                                        Live Demo
                                        <span className="text-sm">↗</span>
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                                        whileTap={{ scale: 0.97 }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-3 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
                                    >
                                        GitHub
                                        <span className="text-sm">↗</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-14 flex justify-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/rohitsisodiya07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/[0.04] px-7 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                    >
                        <span className="text-base text-cyan-400 transition-transform group-hover:rotate-12">⌘</span>
                        More projects on GitHub
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="text-cyan-300"
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;