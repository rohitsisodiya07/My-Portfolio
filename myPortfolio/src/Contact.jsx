import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const quickSubjects = [
        "🚀 Project Inquiry",
        "💼 Job Opportunity",
        "🤝 Collaboration",
        "☕ Just Saying Hi",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (status.message) {
            setStatus({ type: "", message: "" });
        }
    };

    const handleSelectSubject = (subj) => {
        setFormData((prev) => ({ ...prev, subject: subj }));
        if (status.message) setStatus({ type: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    to_email: "rohitsisodiya2503@gmail.com",
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus({
                type: "error",
                message: "Message could not be sent. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-2xl border border-white/10 bg-[#080e1b]/80 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/80 focus:bg-[#0c1527] focus:ring-4 focus:ring-cyan-400/10";

    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden bg-[#070b14] px-5 py-24 text-white sm:px-8 lg:px-16"
        >
            {/* Ambient Background Glows */}
            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.22, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-40 top-10 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px]"
            />

            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                        </span>
                        GET IN TOUCH
                    </div>

                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                        Let's Work{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Together.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        Have an idea, a project, or an opportunity? Send me a message and let's build something remarkable.
                    </p>
                </motion.div>

                {/* Form Card Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 90, damping: 20 }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[1px] shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                        <div className="rounded-[23px] bg-[#0a101d]/90 p-6 sm:p-9 lg:p-10">

                            {/* Card Header */}
                            <div className="mb-8 flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                                        Send a Message
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Fill in the details below and I'll respond as soon as possible.
                                    </p>
                                </div>

                                <motion.div
                                    animate={{ y: [-3, 3, -3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:flex"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            d="M21 3 10 14"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="m21 3-7 18-4-7-7-4 18-7Z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Quick Subject Chips */}
                            <div className="mb-6">
                                <p className="mb-2.5 text-xs font-semibold tracking-wider uppercase text-slate-400">
                                    Quick Topics:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {quickSubjects.map((subj) => (
                                        <button
                                            key={subj}
                                            type="button"
                                            onClick={() => handleSelectSubject(subj)}
                                            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${formData.subject === subj
                                                    ? "border border-cyan-400/60 bg-cyan-400/20 text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                                                    : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/30 hover:text-white"
                                                }`}
                                        >
                                            {subj}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                                        >
                                            Your Name <span className="text-cyan-400">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Rohit Sharma"
                                            autoComplete="name"
                                            maxLength={100}
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                                        >
                                            Email Address <span className="text-cyan-400">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="rohit@example.com"
                                            autoComplete="email"
                                            maxLength={254}
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                                        >
                                            Subject <span className="text-cyan-400">*</span>
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What is this about?"
                                            maxLength={150}
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="sm:col-span-2">
                                        <div className="mb-2 flex items-center justify-between">
                                            <label
                                                htmlFor="message"
                                                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                                            >
                                                Your Message <span className="text-cyan-400">*</span>
                                            </label>
                                            <span className="text-[11px] font-mono text-slate-500">
                                                {formData.message.length}/5000
                                            </span>
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Share details about your idea, timeline, or query..."
                                            maxLength={5000}
                                            required
                                            className={`${inputClass} min-h-32 resize-y`}
                                        />
                                    </div>
                                </div>

                                {/* Status Feedback */}
                                <AnimatePresence>
                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            role="status"
                                            aria-live="polite"
                                            className={`mt-6 flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-sm ${status.type === "success"
                                                    ? "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.15)]"
                                                    : "border-rose-400/30 bg-rose-400/[0.08] text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                                                }`}
                                        >
                                            <span className="text-lg">
                                                {status.type === "success" ? "✓" : "⚠"}
                                            </span>
                                            <span>{status.message}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit & Footer Note */}
                                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={loading}
                                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                    >
                                        {loading ? (
                                            <>
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                    ↗
                                                </span>
                                            </>
                                        )}
                                    </motion.button>

                                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400 sm:justify-end">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>Direct delivery to primary inbox</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-xs text-slate-500">
                        Thanks for stopping by. Looking forward to connecting with you.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;