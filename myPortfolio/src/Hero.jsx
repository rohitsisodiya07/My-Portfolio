import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const technologies = [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "DSA",
    ];

    // --- 3D Hover Effect State ---
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const centerX = box.width / 2;
        const centerY = box.height / 2;

        // Calculate tilt (adjust 15 for sensitivity)
        const rotateXVal = ((y - centerY) / centerY) * -15;
        const rotateYVal = ((x - centerX) / centerX) * 15;

        setRotateX(rotateXVal);
        setRotateY(rotateYVal);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    // --- Framer Motion Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } },
    };

    // Generate random particles for background
    const particles = Array.from({ length: 6 });

    return (
        <section
            className="relative min-h-screen overflow-hidden
            bg-[#070b18] text-white flex items-center
            px-5 sm:px-8 lg:px-16 pt-32 pb-16"
        >
            {/* 1. Floating Particles Background */}
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    style={{
                        width: Math.random() * 6 + 2 + "px",
                        height: Math.random() * 6 + 2 + "px",
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%",
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                />
            ))}

            {/* Background glowing orbs */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[-100px] w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/30 blur-[130px] rounded-full pointer-events-none"
            />

            <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-10">

                {/* LEFT CONTENT */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center lg:text-left z-10"
                >
                    {/* Availability */}
                    <motion.div variants={itemVariants} className="inline-block mb-7">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300 text-xs sm:text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            Available for opportunities
                        </div>
                    </motion.div>

                    {/* Intro */}
                    <motion.p variants={itemVariants} className="text-slate-400 text-lg mb-3">
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight flex flex-col sm:block"
                    >
                        Rohit
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                        </span>
                    </motion.h1>

                    {/* Animated Shine Text */}
                    <motion.h2
                        variants={itemVariants}
                        className="mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300"
                    >
                        Full Stack
                        <motion.span
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-[length:200%_auto]"
                        >
                            {" "}Developer
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-400 text-base sm:text-lg leading-8"
                    >
                        I build modern, responsive and user-friendly web applications using React.js and Next.js. I also work with Node.js, Express.js, MongoDB and MySQL, while continuously improving my problem-solving skills through DSA.
                    </motion.p>

                    {/* Highly Interactive Technology Badges */}
                    <motion.div variants={itemVariants} className="mt-7 flex flex-wrap gap-2.5 justify-center lg:justify-start">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                whileHover={{
                                    scale: 1.1,
                                    y: -3,
                                    boxShadow: "0px 10px 20px rgba(34, 211, 238, 0.2)",
                                    borderColor: "rgba(34, 211, 238, 0.6)",
                                    backgroundColor: "rgba(34, 211, 238, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                className="px-3.5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] text-xs sm:text-sm font-medium text-cyan-200 cursor-pointer"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="group w-full sm:w-auto inline-flex justify-center items-center gap-3 px-7 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40"
                        >
                            View My Work
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="text-lg"
                            >
                                ↗
                            </motion.span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-7 py-4 rounded-xl font-semibold text-slate-200 border border-white/10 bg-white/[0.03]"
                        >
                            Contact Me
                            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                        </motion.a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-4">
                        <span className="text-xs tracking-widest uppercase text-slate-500">
                            Find me on
                        </span>

                        <a href="https://github.com/rohitsisodiya07" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                            GitHub ↗
                        </a>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                            LinkedIn ↗
                        </a>

                        <motion.a
                            whileHover={{ y: -2 }}
                            href="/Rohit_CV.pdf"
                            download="Rohit_Sisodiya_CV.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-cyan-300 border border-cyan-400/30 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-colors ml-2"
                        >
                            Download CV <span className="text-base">↓</span>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* RIGHT VISUAL - 3D INTERACTIVE AREA */}
                <div className="relative flex items-center justify-center min-h-[340px] sm:min-h-[430px]" style={{ perspective: "1000px" }}>

                    {/* Outer glow fixed */}
                    <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-600/20 blur-[75px]" />

                    {/* Floating Container (handles up/down float) */}
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-md aspect-square z-10"
                    >
                        {/* 3D Tilt Card (handles mouse interaction) */}
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            animate={{ rotateX, rotateY }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-full h-full max-h-[430px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.015] backdrop-blur-xl shadow-[0_25px_90px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden cursor-pointer"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Inner Elements popped out in 3D */}
                            <motion.div
                                style={{ transform: "translateZ(30px)" }}
                                className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-blue-400/10"
                            />
                            <motion.div
                                style={{ transform: "translateZ(50px)" }}
                                className="absolute w-52 h-52 sm:w-72 sm:h-72 rounded-full border border-violet-400/15"
                            />

                            {/* 'R' Logo pops out the most */}
                            <motion.div
                                style={{ transform: "translateZ(80px)" }}
                                className="relative flex flex-col items-center"
                            >
                                <div className="text-[130px] sm:text-[170px] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 drop-shadow-[0_10px_35px_rgba(37,99,235,0.2)]">
                                    R
                                </div>
                                <p className="text-slate-400 text-sm tracking-[0.35em] uppercase mt-3 font-medium">
                                    Developer
                                </p>
                            </motion.div>

                            {/* Inside Bottom Badge */}
                            <motion.div
                                style={{ transform: "translateZ(60px)" }}
                                className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-[#0b1020]/75 backdrop-blur-lg px-4 py-3"
                            >
                                <div>
                                    <p className="text-white font-semibold text-sm">Rohit</p>
                                    <p className="text-slate-500 text-xs mt-1">React.js • Next.js • Node.js</p>
                                </div>
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="text-cyan-400 text-xl"
                                >
                                    ✦
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* External Floating Badges */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-8 left-0 sm:left-[-15px] rounded-xl border border-white/10 bg-[#11182a]/90 backdrop-blur-xl px-4 py-3 shadow-xl z-20 pointer-events-none"
                    >
                        <span className="text-cyan-300 text-sm font-semibold">
                            {"</>"} Clean Code
                        </span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-16 right-0 sm:right-[-15px] rounded-xl border border-white/10 bg-[#11182a]/90 backdrop-blur-xl px-4 py-3 shadow-xl z-20 pointer-events-none"
                    >
                        <span className="text-violet-300 text-sm font-semibold">
                            ✦ Problem Solving
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;