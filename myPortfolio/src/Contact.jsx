
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (status.message) {
            setStatus({ type: "", message: "" });
        }
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
        "w-full rounded-xl border border-white/10 bg-[#080e1b] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/70 focus:bg-[#0b1424] focus:ring-4 focus:ring-cyan-400/[0.07]";

    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden bg-[#070b14] px-5 py-24 text-white sm:px-8 lg:px-16"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.09] blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/[0.10] blur-[130px]" />

            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-300">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
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
                        Have an idea, a project, or an opportunity?
                        Send me a message and let's make something
                        meaningful happen.
                    </p>
                </div>

                {/* Form card */}
                <div className="mx-auto max-w-3xl">
                    <div className="rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-[1px] shadow-2xl shadow-cyan-950/20">
                        <div className="rounded-3xl bg-[#0a101d]/95 p-6 sm:p-9 lg:p-10">
                            <div className="mb-8 flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                                        Send a message
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-400">
                                        I'll usually respond as soon as I can.
                                    </p>
                                </div>

                                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300 sm:flex">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
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
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2.5 block text-sm font-medium text-slate-200"
                                        >
                                            Your name <span className="text-cyan-400">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
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
                                            className="mb-2.5 block text-sm font-medium text-slate-200"
                                        >
                                            Email address <span className="text-cyan-400">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
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
                                            className="mb-2.5 block text-sm font-medium text-slate-200"
                                        >
                                            Subject <span className="text-cyan-400">*</span>
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Project inquiry / Collaboration / Hiring"
                                            maxLength={150}
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="message"
                                            className="mb-2.5 block text-sm font-medium text-slate-200"
                                        >
                                            Your message <span className="text-cyan-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me a little about what you're thinking..."
                                            maxLength={5000}
                                            required
                                            className={`${inputClass} min-h-36 resize-y`}
                                        />
                                        <div className="mt-2 text-right text-xs text-slate-500">
                                            {formData.message.length}/5000
                                        </div>
                                    </div>
                                </div>

                                {/* Status */}
                                {status.message && (
                                    <div
                                        role="status"
                                        aria-live="polite"
                                        className={`mt-5 rounded-xl border px-4 py-3 text-sm ${status.type === "success"
                                                ? "border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300"
                                                : "border-red-400/20 bg-red-400/[0.07] text-red-300"
                                            }`}
                                    >
                                        {status.message}
                                    </div>
                                )}

                                {/* Submit */}
                                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-950/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-900/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                        {!loading && (
                                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                ↗
                                            </span>
                                        )}
                                    </button>

                                    <p className="text-center text-xs leading-5 text-slate-500 sm:text-left">
                                        <span className="text-cyan-400">●</span>{" "}
                                        Your message goes directly to my inbox.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-xs text-slate-600">
                        Thanks for stopping by. Looking forward to connecting.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;