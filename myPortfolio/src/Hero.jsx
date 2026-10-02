
import React from "react";

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

    return (
        <section
            className="relative min-h-screen overflow-hidden
        bg-[#070b18] text-white flex items-center
        px-5 sm:px-8 lg:px-16 pt-32 pb-16"
        >
            {/* Background glow */}
            <div
                className="absolute top-20 left-[-100px]
          w-72 h-72 bg-blue-600/20 blur-[120px]
          rounded-full pointer-events-none"
            />

            <div
                className="absolute bottom-10 right-0
          w-80 h-80 bg-violet-600/20 blur-[130px]
          rounded-full pointer-events-none"
            />

            <div
                className="relative max-w-7xl mx-auto w-full
          grid grid-cols-1 lg:grid-cols-2
          items-center gap-14 lg:gap-10"
            >
                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left">
                    {/* Availability */}
                    <div
                        className="inline-flex items-center gap-2
              px-4 py-2 rounded-full
              border border-emerald-400/20
              bg-emerald-400/[0.06]
              text-emerald-300 text-xs sm:text-sm mb-7"
                    >
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute
                  inline-flex h-full w-full
                  rounded-full bg-emerald-400 opacity-60"
                            />
                            <span
                                className="relative inline-flex
                  rounded-full h-2 w-2 bg-emerald-400"
                            />
                        </span>
                        Available for opportunities
                    </div>

                    {/* Intro */}
                    <p className="text-slate-400 text-lg mb-3">
                        Hello, I'm
                    </p>

                    <h1
                        className="text-5xl sm:text-6xl
              lg:text-7xl xl:text-8xl
              font-black tracking-tight leading-tight"
                    >
                        Rohit
                        <span
                            className="text-transparent bg-clip-text
                bg-gradient-to-r from-cyan-400
                via-blue-500 to-violet-500"
                        >
                            .
                        </span>
                    </h1>

                    <h2
                        className="mt-5 text-xl sm:text-2xl
              lg:text-3xl font-semibold text-slate-300"
                    >
                        Full Stack
                        <span className="text-cyan-400">
                            {" "}Developer
                        </span>
                    </h2>

                    <p
                        className="mt-6 max-w-xl mx-auto
              lg:mx-0 text-slate-400
              text-base sm:text-lg leading-8"
                    >
                        I build modern, responsive and
                        user-friendly web applications using
                        React.js and Next.js. I also work with
                        Node.js, Express.js, MongoDB and MySQL,
                        while continuously improving my
                        problem-solving skills through DSA.
                    </p>

                    {/* Technology badges */}
                    <div
                        className="mt-7 flex flex-wrap gap-2.5
              justify-center lg:justify-start"
                    >
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3.5 py-2 rounded-full
                  border border-cyan-400/20
                  bg-cyan-400/[0.05]
                  text-xs sm:text-sm font-medium
                  text-cyan-200
                  hover:bg-cyan-400/10
                  hover:border-cyan-400/50
                  transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div
                        className="mt-9 flex flex-col
              sm:flex-row items-center
              justify-center lg:justify-start gap-4"
                    >
                        <a
                            href="#projects"
                            className="group w-full sm:w-auto
                inline-flex justify-center
                items-center gap-3 px-7 py-4
                rounded-xl font-semibold text-white
                bg-gradient-to-r from-blue-600
                to-violet-600 shadow-lg
                shadow-blue-600/20
                hover:shadow-blue-500/40
                hover:-translate-y-1
                transition-all duration-300"
                        >
                            View My Work
                            <span
                                className="text-lg
                  group-hover:translate-x-1
                  transition-transform"
                            >
                                ↗
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="w-full sm:w-auto
                inline-flex justify-center
                items-center gap-3 px-7 py-4
                rounded-xl font-semibold
                text-slate-200 border
                border-white/10 bg-white/[0.03]
                hover:bg-white/[0.08]
                hover:border-cyan-400/30
                transition-all duration-300"
                        >
                            Contact Me
                            <span className="text-lg">→</span>
                        </a>
                    </div>

                    {/* Social links and CV */}
                    <div
                        className="mt-10 flex flex-wrap
              items-center justify-center
              lg:justify-start gap-x-5 gap-y-4"
                    >
                        <span
                            className="text-xs tracking-widest
                uppercase text-slate-500"
                        >
                            Find me on
                        </span>

                        <a
                            href="https://github.com/rohitsisodiya07"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium
                text-slate-300 hover:text-cyan-400
                transition-colors"
                        >
                            GitHub ↗
                        </a>

                        <span
                            className="w-1 h-1 rounded-full
                bg-slate-600"
                        />

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium
                text-slate-300 hover:text-cyan-400
                transition-colors"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="/Rohit_CV.pdf"
                            download="Rohit_Sisodiya_CV.pdf"
                            className="inline-flex items-center
                gap-2 px-4 py-2 rounded-lg
                font-semibold text-sm text-cyan-300
                border border-cyan-400/30
                bg-cyan-400/5
                hover:bg-cyan-400/10
                hover:border-cyan-400/60
                transition-all duration-300"
                        >
                            Download CV
                            <span className="text-base">↓</span>
                        </a>
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div
                    className="relative flex items-center
            justify-center min-h-[340px]
            sm:min-h-[430px]"
                >
                    {/* Outer glow */}
                    <div
                        className="absolute w-64 h-64
              sm:w-80 sm:h-80 rounded-full
              bg-blue-600/20 blur-[75px]"
                    />

                    {/* Main card */}
                    <div
                        className="relative w-full max-w-md
              aspect-square max-h-[430px]
              rounded-[2rem] border border-white/10
              bg-gradient-to-br from-white/[0.09]
              to-white/[0.015] backdrop-blur-xl
              shadow-[0_25px_90px_rgba(0,0,0,0.4)]
              flex items-center justify-center
              overflow-hidden"
                    >
                        {/* Decorative circles */}
                        <div
                            className="absolute w-72 h-72
                sm:w-96 sm:h-96 rounded-full
                border border-blue-400/10"
                        />

                        <div
                            className="absolute w-52 h-52
                sm:w-72 sm:h-72 rounded-full
                border border-violet-400/15"
                        />

                        <div
                            className="absolute top-8 right-8
                w-3 h-3 rounded-full bg-cyan-400
                shadow-[0_0_20px_#22d3ee]"
                        />

                        <div
                            className="absolute bottom-14 left-10
                w-2 h-2 rounded-full bg-violet-400
                shadow-[0_0_15px_#a78bfa]"
                        />

                        {/* Initial */}
                        <div
                            className="relative z-10
                flex flex-col items-center"
                        >
                            <div
                                className="text-[130px]
                  sm:text-[170px] leading-none
                  font-black tracking-tighter
                  text-transparent bg-clip-text
                  bg-gradient-to-br from-cyan-300
                  via-blue-500 to-violet-600
                  drop-shadow-[0_10px_35px_rgba(37,99,235,0.2)]"
                            >
                                R
                            </div>

                            <p
                                className="text-slate-400 text-sm
                  tracking-[0.35em] uppercase mt-3"
                            >
                                Full Stack Developer
                            </p>
                        </div>

                        {/* Floating label */}
                        <div
                            className="absolute bottom-5
                left-5 right-5 flex items-center
                justify-between rounded-xl
                border border-white/10
                bg-[#0b1020]/75 backdrop-blur-lg
                px-4 py-3"
                        >
                            <div>
                                <p className="text-white font-semibold text-sm">
                                    Rohit
                                </p>
                                <p className="text-slate-500 text-xs mt-1">
                                    React.js • Next.js • Node.js
                                </p>
                            </div>

                            <span className="text-cyan-400 text-xl">
                                ✦
                            </span>
                        </div>
                    </div>

                    {/* Floating tech badge */}
                    <div
                        className="absolute top-8 left-0
              sm:left-[-15px] rounded-xl
              border border-white/10
              bg-[#11182a]/90 backdrop-blur-xl
              px-4 py-3 shadow-xl
              animate-bounce [animation-duration:4s]"
                    >
                        <span className="text-cyan-300 text-sm font-semibold">
                            {"</>"} Clean Code
                        </span>
                    </div>

                    <div
                        className="absolute bottom-16 right-0
              sm:right-[-15px] rounded-xl
              border border-white/10
              bg-[#11182a]/90 backdrop-blur-xl
              px-4 py-3 shadow-xl"
                    >
                        <span className="text-violet-300 text-sm font-semibold">
                            ✦ Problem Solving
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;