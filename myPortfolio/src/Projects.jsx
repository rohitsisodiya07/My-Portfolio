
import React from "react";

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
        github:
            "https://github.com/rohitsisodiya07/Hotel-Management",
        accent: "cyan",
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
        github:
            "https://github.com/rohitsisodiya07/Ai-Learning-App",
        accent: "purple",
    },
    {
        number: "03",
        title: "Task Manager",
        subtitle: "MERN Stack Application",
        category: "MERN Stack",
        description:
            "A task management application developed during my internship at Regex Software Services, demonstrating full-stack development, REST API integration, and database operations.",
        features: [
            "Task management interface",
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
        github:
            "https://github.com/rohitsisodiya07/Task_Manager",
        accent: "green",
    },
];

const TaskPreview = () => {
    const tasks = [
        {
            title: "Complete project documentation",
            tag: "High",
            done: false,
        },
        {
            title: "Design UI for new feature",
            tag: "Medium",
            done: false,
        },
        {
            title: "Fix API integration issue",
            tag: "High",
            done: true,
        },
    ];

    return (
        <div className="min-h-[240px] overflow-hidden rounded-xl bg-slate-100 p-4 text-slate-800 sm:p-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 font-bold">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
                        ✓
                    </span>
                    Task Manager
                </div>

                <span className="text-xs text-slate-500">
                    ⌕　♧　⋮
                </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <div>
                    <p className="text-xs text-slate-500">
                        Workspace
                    </p>
                    <h4 className="text-xl font-bold">
                        My Tasks
                    </h4>
                </div>

                <span className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white">
                    + Add Task
                </span>
            </div>

            <div className="mt-4 flex gap-2 text-[10px] font-medium">
                <span className="rounded-md bg-blue-600 px-3 py-2 text-white">
                    All
                </span>
                <span className="rounded-md border border-slate-200 bg-white px-3 py-2">
                    Pending
                </span>
                <span className="rounded-md border border-slate-200 bg-white px-3 py-2">
                    Completed
                </span>
            </div>

            <div className="mt-3 space-y-2">
                {tasks.map((task) => (
                    <div
                        key={task.title}
                        className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
                    >
                        <span
                            className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${task.done
                                    ? "border-blue-600 bg-blue-600 text-white"
                                    : "border-slate-300"
                                }`}
                        >
                            {task.done ? "✓" : ""}
                        </span>

                        <span
                            className={`flex-1 text-[11px] ${task.done
                                    ? "text-slate-400 line-through"
                                    : "text-slate-700"
                                }`}
                        >
                            {task.title}
                        </span>

                        <span
                            className={`rounded px-2 py-1 text-[9px] ${task.tag === "High"
                                    ? "bg-red-100 text-red-600"
                                    : "bg-amber-100 text-amber-700"
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
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#070b14] px-5 py-24 text-white sm:px-8 lg:px-16"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-14 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/[0.06] px-4 py-2 text-xs font-medium tracking-[0.2em] text-indigo-200">
                        <span className="h-2 w-2 rounded-full bg-indigo-400" />
                        MY WORK
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        Turning ideas into real products through code,
                        creativity, and problem-solving.
                    </p>
                </div>

                {/* Project cards */}
                <div className="grid items-stretch gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group flex flex-col rounded-2xl border border-slate-700/70 bg-[#0b1220]/90 p-3 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-950/30 sm:p-4"
                        >
                            {/* Preview */}
                            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#101827]">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        loading="lazy"
                                        className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                                    />
                                ) : (
                                    <TaskPreview />
                                )}

                                <div className="absolute bottom-3 left-3 rounded-lg border border-white/15 bg-[#08111e]/90 px-3 py-2 text-xs font-medium text-cyan-200 backdrop-blur">
                                    {project.category}
                                </div>
                            </div>

                            {/* Project information */}
                            <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
                                <div className="mb-2 flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight transition group-hover:text-cyan-300">
                                            {project.title}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-cyan-300">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    <span className="mt-1 text-xs font-bold tracking-widest text-slate-500">
                                        {project.number}
                                    </span>
                                </div>

                                <p className="mt-4 text-sm leading-6 text-slate-400">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mt-5 space-y-2">
                                    {project.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-2 text-xs text-slate-300"
                                        >
                                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400/10 text-cyan-300">
                                                ✦
                                            </span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Technology tags */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-[11px] text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-auto flex gap-2 pt-7">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-3 text-sm font-bold text-white transition hover:brightness-110"
                                    >
                                        Live Demo
                                        <span>↗</span>
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 px-3 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                                    >
                                        GitHub
                                        <span>↗</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/rohitsisodiya07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-indigo-400/40 bg-indigo-400/[0.05] px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/60 hover:text-white"
                    >
                        <span className="text-lg">⌘</span>
                        More projects on GitHub
                        <span className="text-cyan-300">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;