"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-pink-500/20 blur-[120px]" />
    </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-black tracking-wide">
            Maham<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm">
            🚀 AI + Full Stack Developer
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Maham Hanif
            </span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
            BS Banking & Finance student at
            <span className="text-cyan-400 font-semibold">
              {" "}University of Sargodha
            </span>
            {" "}with
            <span className="text-yellow-400 font-bold">
              {" "}3.94 CGPA
            </span>.
            Passionate about Agentic AI, Next.js, TypeScript &
            building premium AI-powered web applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Agentic AI",
              "OpenAI",
              "Node.js",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 transition"
              >
                {item}
              </span>
            ))}

          </div>

          <div className="mt-10 flex gap-5">

            <Link
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition font-semibold"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="px-7 py-3 rounded-xl border border-white/20 hover:border-pink-400 hover:text-pink-300 transition"
            >
              Hire Me
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-3xl opacity-40"></div>

            {/* Border */}
            <div className="relative rounded-full p-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">

              <img
                src="/maham.jpg"
                alt="Maham Hanif"
                className="w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-[#020617] shadow-2xl hover:scale-105 duration-500"
              />

            </div>

          </div>

        </div>

      </section>
            {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Passion Meets Innovation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* About Card */}

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 duration-300">

            <h3 className="text-2xl font-bold mb-5">
              👩‍💻 Who I Am
            </h3>

            <p className="text-slate-300 leading-8">
              I'm <span className="text-cyan-400 font-semibold">Maham Hanif</span>,
              a passionate AI & Full Stack Developer currently studying
              BS Banking & Finance at the University of Sargodha.
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              Alongside my degree, I'm learning Agentic AI through PAIB
              and building real-world AI applications using Next.js,
              TypeScript and Tailwind CSS.
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              I have deployed 15+ projects on GitHub & Vercel and also
              have 4 years of experience as a Home Tutor.
            </p>

          </div>

          {/* Education */}

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-3xl p-7 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">

              <h2 className="text-5xl font-black text-cyan-400">
                3.94
              </h2>

              <p className="mt-3 text-slate-300">
                CGPA
              </p>

            </div>

            <div className="rounded-3xl p-7 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-pink-400/30">

              <h2 className="text-5xl font-black text-pink-400">
                15+
              </h2>

              <p className="mt-3 text-slate-300">
                Projects
              </p>

            </div>

            <div className="rounded-3xl p-7 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">

              <h2 className="text-5xl font-black text-yellow-300">
                4+
              </h2>

              <p className="mt-3 text-slate-300">
                Years Teaching
              </p>

            </div>

            <div className="rounded-3xl p-7 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">

              <h2 className="text-5xl font-black text-green-400">
                AI
              </h2>

              <p className="mt-3 text-slate-300">
                Agentic AI Journey
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-14">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            My Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Technologies I Love
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            "🤖 Agentic AI",
            "⚡ TypeScript",
            "▲ Next.js",
            "🎨 Tailwind CSS",
            "⚛ React",
            "🟢 Node.js",
            "🧠 Prompt Engineering",
            "💬 OpenAI APIs",
            "🚀 GitHub",
            "☁️ Vercel",
            "🔗 REST APIs",
            "💻 VS Code",
          ].map((skill) => (

            <div
              key={skill}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-xl font-semibold group-hover:text-cyan-400">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="rounded-[35px] p-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10">

          <h2 className="text-4xl font-black text-center mb-12">
            My Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-black text-cyan-400">4+</h3>
              <p className="mt-3 text-slate-300">Years Home Tutor</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-pink-400">15+</h3>
              <p className="mt-3 text-slate-300">AI Projects</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-yellow-300">3.94</h3>
              <p className="mt-3 text-slate-300">CGPA</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-green-400">2026</h3>
              <p className="mt-3 text-slate-300">Learning Agentic AI</p>
            </div>

          </div>

        </div>

      </section>
            {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Some of my AI and Full Stack projects built with Next.js,
            TypeScript, Tailwind CSS and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "AI Portfolio",
            "Mystery Restaurant",
            "Carbon Cart",
            "Smart Pizza Builder",
            "Medi Reminder",
            "AI Landing Pages",
          ].map((project) => (
            <div
              key={project}
              className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >

              <div className="h-44 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"></div>

              <div className="p-6">

                <h3 className="text-2xl font-bold group-hover:text-cyan-400">
                  {project}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  Responsive AI-powered web application developed using
                  Next.js, TypeScript and Tailwind CSS.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">
                    Next.js
                  </span>

                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                    TypeScript
                  </span>

                  <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">
                    Tailwind
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 pb-24"
      >

        <div className="rounded-[40px] p-12 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 text-center">

          <h2 className="text-5xl font-black">
            Let's Build Something Amazing 🚀
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-8">
            I'm passionate about AI, modern web development and creating
            beautiful digital experiences. I'm always excited to work on
            innovative projects and learn new technologies.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-cyan-400 text-xl font-bold">
                📧 Email
              </h3>

              <p className="mt-3 text-slate-300 break-all">
                mahamhanif.dev@gmail.com
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-pink-400 text-xl font-bold">
                💻 GitHub
              </h3>

              <p className="mt-3 text-slate-300">
                github.com/mahamhanif
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-yellow-300 text-xl font-bold">
                🌍 Location
              </h3>

              <p className="mt-3 text-slate-300">
                Sargodha, Pakistan
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Maham Hanif
          </h2>

          <p className="text-slate-400 mt-4">
            AI + Full Stack Developer • Next.js • TypeScript • Tailwind CSS
          </p>

          <p className="mt-8 text-sm text-slate-500">
            © {new Date().getFullYear()} Maham Hanif. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}