
import { ArrowRight, Bot, Download, Mail } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AGENTIC AI",
    title: "Enterprise Service Agent",
    description:
      "An enterprise AI-agent solution focused on employee-service workflows, onboarding automation, and process orchestration.",
    technologies: ["Copilot Studio", "Power Automate", "Dataverse"],
  },
  {
    number: "02",
    category: "AI & MACHINE LEARNING",
    title: "Predictive Analyst AI Agent",
    description:
      "A data-analysis and forecasting solution designed to turn sales spreadsheets into forecasts and structured reports.",
    technologies: ["Python", "Machine Learning", "LLM Integration"],
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Machine Failure Detection",
    description:
      "A machine-learning project exploring sensor data and classification models to identify potential machine failures.",
    technologies: ["Python", "Random Forest", "Flask"],
  },
  {
    number: "04",
    category: "IOT & EMBEDDED SYSTEMS",
    title: "Automated Lighting Control",
    description:
      "An IoT project using motion sensing and embedded control for automated lighting, with manual override functionality.",
    technologies: ["Arduino Uno", "Embedded C", "PIR Sensor"],
  },
];

const skills = [
  "Agentic AI",
  "Generative AI",
  "Azure AI Foundry",
  "Azure OpenAI",
  "Microsoft Copilot Studio",
  "Power Automate",
  "Power Apps",
  "Dataverse",
  "Python",
  "Machine Learning",
  "SQL",
  "React",
  "FastAPI",
  "Streamlit",
  "Git",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#07111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight">
            PD<span className="text-blue-400">.</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>
            <a href="#experience" className="transition hover:text-blue-400">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </nav>

          <a
            href="mailto:prajwaldeotare673@gmail.com"
            className="rounded-lg border border-blue-400/40 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-400/10"
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            AI Engineer · Open to opportunities
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            Hello, I&apos;m Prajwal Deotare
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Building the next generation of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              intelligent AI.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build intelligent AI agents and LLM-powered solutions that
            automate business workflows and address practical operational
            problems. My focus spans Agentic AI, Generative AI, machine
            learning, and enterprise automation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Explore Projects <ArrowRight size={18} />
            </a>

            <a
              href="/resume/Prajwal-Deotare-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 font-semibold transition hover:border-blue-400/60 hover:bg-white/[0.04]"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <a
              href="https://www.linkedin.com/in/prajwal-deotare"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Prajwal-Deotare"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="mailto:prajwaldeotare673@gmail.com"
              className="transition hover:text-blue-400"
            >
              Email
            </a>

            <span className="h-5 w-px bg-white/15" />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-[90px]" />

          <div className="relative rounded-[2rem] border border-blue-300/20 bg-gradient-to-b from-blue-400/10 to-transparent p-3 shadow-2xl shadow-blue-950/40">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101d2e]">
              <img
                src="/images/profile.jpg"
                alt="Portrait of Prajwal Deotare"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#101d2e] px-5 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Focus
              </p>
              <p className="mt-1 font-semibold text-blue-300">
                AI Agents &amp; Automation
              </p>
            </div>

            <div className="absolute -right-3 top-10 rounded-xl border border-white/10 bg-[#101d2e] p-3 shadow-xl">
              <Bot size={27} className="text-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-y border-white/[0.07] bg-white/[0.02]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              AI engineering with a focus on real business problems.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              My work brings together AI agents, large language models,
              machine learning, and business-process automation to help
              simplify operational workflows.
            </p>
            <p>
              I work with Microsoft AI and Power Platform technologies,
              connecting services, structured business data, and automated
              workflows to build practical enterprise solutions.
            </p>
            <p>
              I am interested in developing reliable AI systems that do more
              than answer questions: systems that help users take action,
              coordinate tasks, and make better-informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Projects I&apos;ve worked on
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            A selection of AI, machine-learning, and automation projects.
            Detailed case studies can be added as we develop the portfolio.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-[#0b1929] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#0e1e32]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-widest text-blue-400">
                  {project.number}
                </span>
                <ArrowRight
                  size={20}
                  className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-slate-400">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 min-h-20 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/[0.07] bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            Technical Toolkit
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            A selection of technologies relevant to my AI engineering and
            enterprise automation work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-[#0b1929] px-4 py-3 text-sm text-slate-200 transition hover:border-blue-400/50 hover:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
          Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Professional journey
        </h2>

        <div className="mt-9 rounded-2xl border border-white/10 bg-[#0b1929] p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">AI Engineer</h3>
              <p className="mt-1 text-blue-300">Encloud Tech Solutions</p>
            </div>

            <span className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-400">
              April 2026 – Present
            </span>
          </div>

          <ul className="mt-7 list-disc space-y-4 pl-5 text-sm leading-7 text-slate-300 sm:text-base">
            <li>
              Developed workflow automation and structured data solutions
              supporting enterprise AI-agent processes.
            </li>
            <li>
              Contributed to employee-service workflows, onboarding automation,
              and integrations across Microsoft business applications.
            </li>
            <li>
              Worked on resume-screening workflow components involving email
              intake, text extraction, candidate analysis, data storage, and HR
              notifications.
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Education
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              B.Tech in Computer Science &amp; Engineering
            </h2>

            <p className="mt-3 text-slate-300">
              Vishwakarma University, Pune
            </p>

            <p className="mt-2 text-sm text-slate-400">2023 – 2026</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Current Direction
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Building useful, action-oriented AI.
            </h2>

            <p className="mt-3 leading-7 text-slate-300">
              Interested in AI engineering opportunities involving intelligent
              agents, LLM integrations, machine learning, and enterprise
              workflow automation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
          Get In Touch
        </p>

        <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              Let&apos;s build something intelligent.
            </h2>

            <a
              href="mailto:prajwaldeotare673@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
            >
              <Mail size={19} />
              prajwaldeotare673@gmail.com
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="flex gap-4 text-sm text-slate-400">
            <a
              href="https://www.linkedin.com/in/prajwal-deotare"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-4 py-3 transition hover:border-blue-400/50 hover:text-blue-300"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Prajwal-Deotare"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-4 py-3 transition hover:border-blue-400/50 hover:text-blue-300"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© Prajwal Deotare</p>
          <p>Designed and built with Next.js and Tailwind CSS</p>
        </div>
      </footer>

      {/* Chatbot launcher — functionality will be added later */}
      <button
        type="button"
        aria-label="Portfolio AI assistant coming soon"
        title="Portfolio AI assistant coming soon"
        disabled
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-not-allowed items-center justify-center rounded-full border border-blue-300/30 bg-blue-600 text-white shadow-xl shadow-blue-950/50"
      >
        <Bot size={25} />
      </button>
    </main>
  );
}
