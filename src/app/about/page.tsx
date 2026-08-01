"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <Link href="/" className="text-3xl font-black">
            Maham<span className="text-cyan-400">.</span>
          </Link>

          <div className="hidden md:flex gap-8 text-slate-300">
            <Link href="/">Home</Link>
            <Link href="/about" className="text-cyan-400">
              About
            </Link>
            <a href="#journey">Journey</a>
            <a href="#skills">Skills</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
            ✨ About Me
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            My
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8">
            Hi, I'm <span className="text-cyan-400 font-semibold">Maham Hanif</span>,
            a passionate AI + Full Stack Developer and a BS Banking &
            Finance student at the University of Sargodha with a CGPA of
            <span className="text-yellow-400 font-bold"> 3.94/4.00</span>.
          </p>

          <p className="mt-6 text-slate-400 leading-8">
            I love creating modern AI-powered applications using
            Next.js, TypeScript and Tailwind CSS while continuously
            learning Agentic AI, Prompt Engineering and Context
            Engineering.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition"
            >
              Back Home
            </Link>

            <a
              href="#journey"
              className="px-7 py-3 rounded-xl border border-white/20 hover:border-pink-400 transition"
            >
              My Journey
            </a>

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
            {/* ================= EDUCATION ================= */}

      <section
        id="journey"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-14">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            My Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Education & AI Journey
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">

            <h3 className="text-3xl font-bold mb-8 text-cyan-400">
              🎓 Education
            </h3>

            <div className="space-y-8 border-l-2 border-cyan-400 pl-6">

              <div>
                <h4 className="text-xl font-semibold">
                  University of Sargodha
                </h4>

                <p className="text-slate-400 mt-2">
                  BS Banking & Finance
                </p>

                <p className="text-cyan-400 mt-2">
                  CGPA : 3.94 / 4.00
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  Agentic AI
                </h4>

                <p className="text-slate-400 mt-2">
                  Learning through PAIB
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  AI Development
                </h4>

                <p className="text-slate-400 mt-2">
                  Prompt Engineering • Context Engineering • AI Agents
                </p>
              </div>

            </div>

          </div>

          {/* Experience */}

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">

            <h3 className="text-3xl font-bold mb-8 text-pink-400">
              💼 Experience
            </h3>

            <div className="space-y-6">

              <div className="rounded-2xl bg-white/5 p-6">

                <h4 className="text-xl font-semibold">
                  Home Tutor
                </h4>

                <p className="text-cyan-400 mt-2">
                  4+ Years Experience
                </p>

                <p className="text-slate-400 mt-3 leading-7">
                  Teaching students while improving communication,
                  leadership and problem-solving skills.
                </p>

              </div>

              <div className="rounded-2xl bg-white/5 p-6">

                <h4 className="text-xl font-semibold">
                  AI & Web Development
                </h4>

                <p className="text-cyan-400 mt-2">
                  15+ Projects
                </p>

                <p className="text-slate-400 mt-3 leading-7">
                  Developed responsive AI-powered applications and
                  deployed projects using GitHub & Vercel.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              number: "3.94",
              title: "CGPA",
              color: "text-cyan-400",
            },
            {
              number: "15+",
              title: "Projects",
              color: "text-pink-400",
            },
            {
              number: "4+",
              title: "Years Teaching",
              color: "text-yellow-300",
            },
            {
              number: "100%",
              title: "Passion",
              color: "text-green-400",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition"
            >

              <h2 className={`text-5xl font-black ${item.color}`}>
                {item.number}
              </h2>

              <p className="text-slate-300 mt-4">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <div className="text-center mb-14">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Technologies I Work With
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            "🤖 Agentic AI",
            "⚡ TypeScript",
            "▲ Next.js",
            "⚛ React",
            "🎨 Tailwind CSS",
            "🟢 Node.js",
            "🧠 Prompt Engineering",
            "💬 OpenAI API",
            "🚀 GitHub",
            "☁️ Vercel",
            "🔗 REST APIs",
            "💻 VS Code",
          ].map((skill) => (

            <div
              key={skill}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center hover:border-cyan-400 hover:scale-105 transition"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>

          ))}

        </div>

      </section>
            {/* ================= WHY ME ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Why Me
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            What Makes Me Different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: "⚡",
              title: "Fast Learner",
              desc: "Always exploring new AI technologies and frameworks.",
            },
            {
              icon: "🧠",
              title: "Problem Solver",
              desc: "I enjoy solving real-world problems with technology.",
            },
            {
              icon: "🚀",
              title: "Project Builder",
              desc: "Built and deployed 15+ modern AI & web projects.",
            },
            {
              icon: "💙",
              title: "Clean Code",
              desc: "Writing readable, scalable and responsive applications.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 hover:border-cyan-400 hover:-translate-y-2 transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-2xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ================= GOALS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="rounded-[35px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 p-10">

          <h2 className="text-4xl font-black text-center mb-10">
            Career Goals 🎯
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Become a Professional AI Engineer",
              "Build Intelligent AI Products",
              "Work with Global Tech Companies",
              "Contribute to Open Source",
              "Keep Learning Every Day",
              "Create Real-World AI Solutions",
            ].map((goal) => (
              <div
                key={goal}
                className="rounded-2xl bg-white/5 border border-white/10 p-5"
              >
                ✅ {goal}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <div className="rounded-[35px] bg-white/5 backdrop-blur-xl border border-white/10 p-12">

          <h2 className="text-3xl md:text-4xl font-black leading-relaxed bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            "I don't just write code —
            I build intelligent digital experiences powered by AI."
          </h2>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] p-12 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 text-center">

          <h2 className="text-5xl font-black">
            Let's Build Something Amazing 🚀
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-8">
            I enjoy creating AI-powered applications, modern websites
            and beautiful digital experiences. Let's connect and create
            something meaningful together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="/"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition"
            >
              Back Home
            </a>

            <a
              href="/#projects"
              className="px-8 py-3 rounded-xl border border-white/20 hover:border-pink-400 transition"
            >
              View Projects
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Maham Hanif
          </h2>

          <p className="mt-4 text-slate-400">
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