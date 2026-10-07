import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    const timeline = [
        {
            year: "2022 – 2025",
            title: "Bachelor of Computer Applications (BCA)",
            company: "University Commerce College, Jaipur",
            type: "Education",
            icon: "🎓", // Added icon for visual flair
            description:
                "Completed my Bachelor of Computer Applications with a focus on computer science, programming and software development.",
        },
        {
            year: "2025",
            title: "30 Days MasterClass in Full Stack",
            company: "NoviTech R&D Private Limited",
            type: "Certification",
            icon: "📜",
            description:
                "Completed a 30-day Full Stack Development MasterClass with practical exposure to modern web development technologies.",
        },
        {
            year: "March 2026 – Present",
            title: "MERN Stack Developer Intern",
            company: "Regex Software Services",
            type: "Internship",
            icon: "💼",
            description:
                "Working on full-stack web applications using React.js, Node.js, Express.js and MongoDB, with hands-on experience in REST APIs and backend development.",
        },
    ];

    // --- Framer Motion Variants ---
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#070b14] px-6 py-24 text-white"
        >
            {/* Animated Background Glows */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 -z-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none"
            />

            <div className="relative z-10 mx-auto max-w-5xl">

                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                    className="mb-20 text-center"
                >
                    <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        <span className="h-[1px] w-8 bg-cyan-400/50"></span>
                        My Journey
                        <span className="h-[1px] w-8 bg-cyan-400/50"></span>
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl tracking-tight">
                        Education &{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-relaxed">
                        A timeline of my education, learning journey and professional
                        experience in web development.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">

                    {/* Animated Timeline Center Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-4 top-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-1/2 md:-translate-x-1/2"
                    />

                    <div className="space-y-12">
                        {timeline.map((item, index) => {
                            // Check if index is even (left side on desktop)
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Timeline Dot with Pulse Animation */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute left-[16.5px] top-8 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#070b14] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] md:left-1/2"
                                    >
                                        <span className="absolute inset-0 h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                                    </motion.div>

                                    {/* Content Card */}
                                    <div className={`w-full pl-12 md:w-1/2 ${isEven ? "md:pl-0 md:pr-12 md:text-right" : "md:pl-12 md:pr-0"
                                        }`}>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-50px" }}
                                            variants={cardVariants}
                                            whileHover={{
                                                scale: 1.02,
                                                y: -5,
                                                borderColor: "rgba(34, 211, 238, 0.4)",
                                                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)"
                                            }}
                                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1222]/80 p-6 backdrop-blur-md transition-all duration-300 hover:bg-[#111a30]"
                                        >
                                            {/* Subtle Hover Glow Inside Card */}
                                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-[40px] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                                            {/* Header: Year & Type (Align differently based on side) */}
                                            <div className={`mb-4 flex flex-col gap-2 sm:flex-row sm:items-center ${isEven ? "md:flex-row-reverse" : ""} justify-between`}>

                                                {/* Year Badge */}
                                                <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                                                    {item.year}
                                                </span>

                                                {/* Category/Type with Icon */}
                                                <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 ${isEven ? "md:justify-end" : ""}`}>
                                                    <span className="text-base">{item.icon}</span>
                                                    {item.type}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="mb-2 text-xl font-bold text-white md:text-2xl transition-colors duration-300 group-hover:text-cyan-300">
                                                {item.title}
                                            </h3>

                                            {/* Company */}
                                            <p className="mb-4 font-medium text-slate-300">
                                                {item.company}
                                            </p>

                                            {/* Description */}
                                            <p className="leading-relaxed text-slate-400 text-sm sm:text-base">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;