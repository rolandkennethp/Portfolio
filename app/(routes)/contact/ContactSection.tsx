"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, ArrowUpRight, Loader2, Check } from "lucide-react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

// lucide-react removed brand icons (Github, Linkedin, Twitter, etc.) — inline SVGs instead
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function WhatsappIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.09-1.33a10 10 0 0 0 4.93 1.3h.01c5.52 0 10.02-4.5 10.02-10.02C22.05 6.5 17.55 2 12.02 2Zm0 18.16h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.02.79.81-2.94-.2-.3a8.1 8.1 0 0 1-1.24-4.33c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.67 8.16-8.17 8.16Zm4.48-6.12c-.24-.12-1.44-.71-1.67-.8-.22-.08-.38-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

// EmailJS config — from your EmailJS dashboard (Account > API Keys, Email Services, Email Templates)
const EMAILJS_SERVICE_ID = "service_81zjvxa";
const EMAILJS_NOTIFY_TEMPLATE_ID = "template_v5q2osk"; // sends the message to you
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_b3l9nop"; // sends thank-you to sender
const EMAILJS_PUBLIC_KEY = "HELXuJAghBsAi30EB";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;

    setStatus("sending");

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    try {
      // 1. Notify you with the message
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NOTIFY_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      // 2. Auto-reply thank-you email back to the sender
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-[#0a0a0a] sm:px-8 sm:py-24 py-10 px-5 lg:px-16">
      <div className="grid grid-cols-1 sm:gap-16 gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#D4B03A]">
            LET&apos;S WORK TOGETHER
          </p>

          <h2
            className={`${bebas.className} mt-4 text-5xl leading-[1.05] tracking-wide text-white sm:text-6xl`}
          >
            MAKE THE NEXT
            <br />
            <span className="text-[#D4B03A]">SCENE COUNT.</span>
          </h2>

          <p className="sm:mt-6 mt-4 max-w-md text-base leading-relaxed text-white/60">
            Have a product challenge, an opening on your team, or an idea worth
            shaping? I&apos;d be glad to hear it.
          </p>

          <div className="sm:mt-10 mt-7 grid grid-cols-1 md:grid-cols-2 space-y-4">
            <a
              href="mailto:rolndknnth@gmail.com"
              aria-label="Send an email to Roland Kenneth P"
              className="flex w-fit items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Mail size={16} />
              <span>rolndknnth@gmail.com</span>
            </a>
            <a
              href="https://wa.me/7204630300"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit text-sm text-white/70 transition-colors hover:text-white"
            >
              <WhatsappIcon size={16} />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/rolandkennethp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit text-sm text-white/70 transition-colors hover:text-white"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/rolandkennethp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit text-sm text-white/70 transition-colors hover:text-white"
            >
              <GithubIcon size={16} />
              GitHub
            </a>

            <div className="flex items-center gap-3 w-fit text-sm text-white/70">
              <MapPin size={16} />
              Bangalore, India
            </div>
          </div>
        </motion.div>

        {/* Right column - form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border border-white/10 bg-[#0d0c07] p-8"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium tracking-[0.15em] text-white/60">
                YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#D4B03A]"
              />
            </div>
            <div>
              <label className="text-xs font-medium tracking-[0.15em] text-white/60">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#D4B03A]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-xs font-medium tracking-[0.15em] text-white/60">
              WHAT CAN I HELP WITH?
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full resize-y border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#D4B03A]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="mt-6 flex items-center gap-2 bg-[#D4B03A] px-6 py-3 text-sm font-semibold tracking-wide text-[#0a0a0a] transition-colors hover:bg-[#e9c25c] disabled:cursor-not-allowed disabled:opacity-80"
          >
            {status === "sending" && (
              <>
                <Loader2 size={16} className="animate-spin" />
                SENDING...
              </>
            )}
            {status === "sent" && (
              <>
                <Check size={16} />
                SENT
              </>
            )}
            {(status === "idle" || status === "error") && (
              <>
                SEND MESSAGE
                <ArrowUpRight size={16} />
              </>
            )}
          </button>

          {status === "error" && (
            <p className="mt-3 text-sm text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
