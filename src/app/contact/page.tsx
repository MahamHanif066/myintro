"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-pink-500/20 blur-[120px]" />
      </div>

      {/* Navbar */}

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link href="/" className="text-3xl font-black">
            Maham<span className="text-cyan-400">.</span>
          </Link>

          <div className="hidden md:flex gap-8 text-slate-300">

            <Link href="/">Home</Link>

            <Link href="/about">
              About
            </Link>

            <Link
              href="/contact"
              className="text-cyan-400"
            >
              Contact
            </Link>

          </div>

        </div>

      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
            📩 Contact Me
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Let's Create

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

              Something Amazing

            </span>

          </h1>

          <p className="mt-8 text-lg text-slate-300 leading-8">

            Whether you have a project, internship opportunity,
            freelance work or just want to say hello,
            I'd love to hear from you.

          </p>

          <p className="mt-5 text-slate-400 leading-8">

            Feel free to reach out anytime.
            I'm always excited to collaborate on
            AI, Web Development and innovative ideas.

          </p>

          <div className="mt-10 flex gap-5 flex-wrap">

            <a
              href="#contactForm"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-300"
            >
              Send Message
            </a>

            <Link
              href="/"
              className="px-8 py-3 rounded-xl border border-white/20 hover:border-pink-400 transition"
            >
              Back Home
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-3xl opacity-40"></div>

            <div className="relative rounded-full p-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">

              <img
                src="/maham.jpg"
                alt="Maham Hanif"
                className="w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-[#020617]"
              />

            </div>

          </div>

        </div>

      </section>
            {/* ================= CONTACT SECTION ================= */}

      <section
        id="contactForm"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="rounded-[35px] bg-white/5 backdrop-blur-xl border border-white/10 p-8">

            <h2 className="text-4xl font-black mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-5 py-4 outline-none resize-none focus:border-cyan-400"
              ></textarea>

              <button
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-[1.02] duration-300 font-semibold"
              >
                🚀 Send Message
              </button>

            </form>

          </div>

          {/* Contact Cards */}

          <div className="space-y-6">

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-cyan-400 transition">

              <h3 className="text-2xl font-bold text-cyan-400">
                📧 Email
              </h3>

              <p className="text-slate-300 mt-3">
                mahamhanif.dev@gmail.com
              </p>

            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-pink-400 transition">

              <h3 className="text-2xl font-bold text-pink-400">
                📱 Phone
              </h3>

              <p className="text-slate-300 mt-3">
                +92 300 1234567
              </p>

            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-yellow-400 transition">

              <h3 className="text-2xl font-bold text-yellow-300">
                📍 Location
              </h3>

              <p className="text-slate-300 mt-3">
                Sargodha, Pakistan
              </p>

            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-green-400 transition">

              <h3 className="text-2xl font-bold text-green-400">
                💼 Availability
              </h3>

              <p className="text-slate-300 mt-3">
                Open for Internship
              </p>

              <p className="text-slate-300">
                Freelance Projects
              </p>

              <p className="text-slate-300">
                Remote Opportunities
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SOCIAL LINKS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-10">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Connect With Me
          </span>

          <h2 className="text-4xl font-black mt-4">
            Follow My Journey
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              icon: "💻",
              title: "GitHub",
              value: "github.com/mahamhanif",
            },
            {
              icon: "💼",
              title: "LinkedIn",
              value: "linkedin.com/in/mahamhanif",
            },
            {
              icon: "🚀",
              title: "Vercel",
              value: "maham.vercel.app",
            },
            {
              icon: "🌐",
              title: "Portfolio",
              value: "AI Developer",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-2 break-all">
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </section>
            {/* ================= CTA ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-12 text-center">

          <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-pink-500/20 blur-3xl"></div>

          <div className="relative">

            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
              🚀 Available for Opportunities
            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
              Let's Build The
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future with AI
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              I'm always excited to collaborate on AI products,
              modern web applications and innovative startup ideas.
              Let's create something impactful together.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="/"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold hover:scale-105 duration-300"
              >
                🏠 Home
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/20 px-8 py-4 hover:border-pink-400 duration-300"
              >
                👩 About Me
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Left */}

            <div>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Maham Hanif
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                AI + Full Stack Developer passionate about creating
                intelligent web experiences using Next.js,
                TypeScript and Agentic AI.
              </p>

            </div>

            {/* Center */}

            <div>

              <h3 className="text-xl font-bold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3 text-slate-400">

                <li>
                  <Link href="/" className="hover:text-cyan-400">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:text-cyan-400">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-cyan-400">
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* Right */}

            <div>

              <h3 className="text-xl font-bold mb-4">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">

                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "React",
                  "Node.js",
                  "OpenAI",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center">

            <p className="text-slate-500">
              © {new Date().getFullYear()} Maham Hanif • AI + Full Stack Developer
            </p>

            <p className="mt-3 text-sm text-slate-600">
              Designed & Developed with ❤️ using Next.js, TypeScript & Tailwind CSS.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}