"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AGENTIC AI",
    title: "Enterprise Service Agent",
    description:
      "An enterprise AI-agent solution focused on employee-service workflows, onboarding automation, and process orchestration.",
    tags: ["Copilot Studio", "Power Automate", "Dataverse"],
    icon: BriefcaseBusiness,
    accent: "blue",
    details:
      "Designed around employee-service workflows, including onboarding activities, resume-screening workflow components, structured data storage, and Microsoft Teams notifications.",
  },
  {
    number: "02",
    category: "AI & MACHINE LEARNING",
    title: "Predictive Analyst AI Agent",
    description:
      "A data-analysis and forecasting solution designed to turn sales spreadsheets into forecasts and structured reports.",
    tags: ["Python", "Machine Learning", "LLM Integration"],
    icon: Cpu,
    accent: "cyan",
    details:
      "A workflow for ingesting spreadsheet data, preparing it for analysis, generating forecasts, and presenting results through structured business reports.",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Machine Failure Detection",
    description:
      "A machine-learning project exploring sensor data and classification models to identify potential machine failures.",
    tags: ["Python", "Random Forest", "Flask"],
    icon: Zap,
    accent: "violet",
    details:
      "Academic/industrial project focused on sensor-data processing, feature engineering, classification approaches, and a Flask/Dash interface.",
  },
  {
    number: "04",
    category: "IOT & EMBEDDED SYSTEMS",
    title: "Automated Lighting Control",
    description:
      "An IoT project using motion sensing and embedded control for automated lighting, with manual override functionality.",
    tags: ["Arduino Uno", "Embedded C", "PIR Sensor"],
    icon: Sparkles,
    accent: "blue",
    details:
      "A motion-sensing lighting system using an Arduino Uno, PIR sensor, Bluetooth control, and a manual override.",
  },
  {
    number: "05",
    category: "PYTHON APPLICATION",
    title: "Weather App",
    description:
      "A Python application that retrieves weather information from a weather API and processes the response.",
    tags: ["Python", "Requests", "JSON"],
    icon: Code2,
    accent: "cyan",
    details:
      "A small API-driven application using HTTP requests and JSON data handling to present weather information.",
  },
];

const skills = [
  { title: "AI & Agentic Systems", items: ["AI Agents", "Agentic AI", "Generative AI", "LLM Integration", "Machine Learning"] },
  { title: "Microsoft & Azure", items: ["Azure AI Foundry", "Azure OpenAI", "Copilot Studio", "Power Automate", "Power Apps", "Dataverse", "Microsoft Teams", "Entra ID", "Adaptive Cards", "Outlook"] },
  { title: "Programming", items: ["Python", "C/C++", "SQL", "JavaScript"] },
  { title: "Web & Data", items: ["HTML/CSS", "ReactJS", "MySQL", "ETL", "Data Pipelines", "Data Schemas"] },
  { title: "Libraries & Frameworks", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Flask", "FastAPI", "Streamlit"] },
  { title: "Tools", items: ["Git", "GitHub", "Power BI", "Excel", "Figma", "MySQL Workbench", "Arduino Uno"] },
];

const certifications = [
  { name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate", issuer: "Microsoft", date: "2026" },
  { name: "Microsoft AI and ML Engineering", issuer: "Coursera", date: "March 2025" },
  { name: "Green Skills and Artificial Intelligence", issuer: "Skills4Future Program", date: "September 2025" },
];


const chatAnswers: { match: string[]; answer: string }[] = [
  {
    match: ["enterprise service agent", "esa", "onboarding agent"],
    answer:
      "The Enterprise Service Agent automates employee-service workflows using Copilot Studio, Power Automate, and Dataverse. Its workflows include onboarding activities, resume-screening components, and Microsoft Teams notifications.",
  },
  {
    match: ["predictive analyst", "sales forecasting", "forecast"],
    answer:
      "The Predictive Analyst AI Agent analyzes sales spreadsheets, prepares data for forecasting, and presents results in structured business reports. Its work combines Python, machine learning, and LLM integration.",
  },
  {
    match: ["machine failure", "failure detection", "random forest"],
    answer:
      "Machine Failure Detection is a machine-learning project that uses sensor data, feature engineering, and classification models to explore potential machine failures. It includes a Flask/Dash interface.",
  },
  {
    match: ["lighting control", "iot", "arduino", "embedded"],
    answer:
      "The Automated Lighting Control project uses an Arduino Uno, a PIR motion sensor, Embedded C, and Bluetooth control. It also supports manual override.",
  },
  {
    match: ["weather app", "weather application"],
    answer:
      "The Weather App is a Python application that retrieves weather information through an API and processes the response using Requests and JSON.",
  },
  {
    match: ["project", "projects", "portfolio", "my work"],
    answer:
      "Prajwal's projects include the Enterprise Service Agent, Predictive Analyst AI Agent, Machine Failure Detection, Automated Lighting Control, and Weather App. Which one would you like to explore?",
  },
  {
    match: ["skill", "skills", "technology", "technologies", "tech stack", "tools"],
    answer:
      "Prajwal works with AI agents, Generative AI, Azure AI Foundry, Azure OpenAI, Copilot Studio, Power Automate, Dataverse, Python, machine learning, SQL, and ReactJS.",
  },
  {
    match: ["experience", "job", "company", "employer"],
    answer:
      "Prajwal is an AI Engineer at Encloud Tech Solutions in Pune. His work includes enterprise AI-agent workflows, onboarding automation, resume-screening components, and Microsoft service integrations.",
  },
  {
    match: ["resume", "cv"],
    answer:
      "You can view or download Prajwal's resume using the Download Resume button near the top of the portfolio.",
  },
  {
    match: ["contact", "email", "reach", "linkedin"],
    answer:
      "You can email Prajwal at prajwaldeotare673@gmail.com or connect with him on LinkedIn at linkedin.com/in/prajwal-deotare.",
  },
  {
    match: ["education", "degree", "university", "graduation"],
    answer:
      "Prajwal studied B.Tech in Computer Science & Engineering at Vishwakarma University, Pune, from 2022 to 2026.",
  },
  {
    match: ["certification", "certifications", "certified"],
    answer:
      "Prajwal's listed certifications include Microsoft Certified: Azure AI Apps and Agents Developer Associate, Microsoft AI and ML Engineering from Coursera, and Green Skills and Artificial Intelligence through the Skills4Future Program.",
  },
];


function NetworkBackdrop() {
  return (
    <div className="network-backdrop" aria-hidden="true">
      <div className="network-grid" />
      <svg className="network-lines" viewBox="0 0 900 650" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M80 180 L210 110 L330 190 L470 90 L590 180 L760 105" />
        <path d="M80 180 L170 340 L330 190 L420 360 L590 180 L720 330 L820 230" />
        <path d="M170 340 L250 510 L420 360 L520 520 L720 330 L790 500" />
        <path d="M210 110 L250 510 M470 90 L520 520 M760 105 L790 500" />
        {[["80","180"],["210","110"],["330","190"],["470","90"],["590","180"],["760","105"],["170","340"],["420","360"],["720","330"],["250","510"],["520","520"],["790","500"],["820","230"]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r={i%3===0?4:2.5} />
        ))}
      </svg>
      <div className="orb orb-one" />
      <div className="orb orb-two" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{ from: "assistant" | "user"; text: string }[]>([
    { from: "assistant", text: "Hi! I’m the portfolio assistant. Ask me about Prajwal’s projects, skills, experience, or how to get in touch." },
  ]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function sendMessage() {
    const question = chatInput.trim();
    if (!question) return;
    const lower = question.toLowerCase();
    const found = chatAnswers.find((entry) => entry.match.some((term) => lower.includes(term)));
    const answer = found?.answer ?? "I can help with the projects, technical skills, experience, education, resume, and contact details shown on this portfolio. Try asking about one of those topics.";
    setChatMessages((messages) => [...messages, { from: "user", text: question }, { from: "assistant", text: answer }]);
    setChatInput("");
  }

  const navItems = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="site-shell">
      <NetworkBackdrop />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Prajwal Deotare home">PD<span>.</span></a>
        <nav className={`main-nav ${mobileMenuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s Talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}>
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> AI Engineer <span className="availability-divider">·</span> Open to opportunities</div>
          <p className="hero-kicker">HELLO, I&apos;M PRAJWAL DEOTARE</p>
          <h1>Building the next generation of <span>intelligent AI.</span></h1>
          <p className="hero-description">
            I build intelligent AI agents and LLM-powered solutions that automate business workflows and address practical operational problems. My focus spans Agentic AI, Generative AI, machine learning, and enterprise automation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore Projects <ArrowRight size={18} /></a>
            <a className="button button-secondary" href="/resume/Prajwal-Deotare-Resume.pdf" target="_blank" rel="noreferrer">Download Resume <Download size={17} /></a>
          </div>
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/prajwal-deotare" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            <a href="https://github.com/Prajwal-Deotare" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
            <a href="mailto:prajwaldeotare673@gmail.com">Email</a>
            <span>Pune, India</span>
          </div>
          <div className="hero-scroll"><span /> SCROLL TO EXPLORE <ArrowDownRight size={15} /></div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-a" />
          <div className="visual-orbit orbit-b" />
          <div className="visual-index"><span>AI / 01</span><span>ENGINEERING</span></div>
          <div className="portrait-frame">
            <div className="portrait-glow" />
            <img src="/images/profile.jpg" alt="Portrait of Prajwal Deotare" />
            <div className="portrait-shade" />
            <div className="portrait-label"><span className="label-pulse" /> AI ENGINEER <span className="label-separator">/</span> PUNE, INDIA</div>
          </div>
          <div className="floating-chip chip-top"><span className="chip-icon"><Bot size={18} /></span><span><small>BUILDING WITH</small><strong>Agentic AI</strong></span></div>
          <div className="floating-chip chip-bottom"><span className="chip-icon cyan"><Cpu size={18} /></span><span><small>FOCUS</small><strong>AI Agents &amp; Automation</strong></span></div>
          <div className="visual-caption">INTELLIGENCE, ENGINEERED.</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Areas of focus">
        <div className="signal-track">
          {["AGENTIC AI", "GENERATIVE AI", "LLM INTEGRATION", "MACHINE LEARNING", "ENTERPRISE AUTOMATION", "AGENTIC AI", "GENERATIVE AI", "LLM INTEGRATION"].map((item, i) => (
            <span key={`${item}-${i}`}><Sparkles size={14} /> {item}</span>
          ))}
        </div>
      </section>

      <section id="about" className="section-wrap section-block about-section">
        <div className="about-label"><p className="eyebrow">ABOUT ME / 01</p><div className="about-decoration"><span /><span /><span /><span /><span /></div></div>
        <div className="about-content">
          <h2>AI engineering with a focus on <span>real business problems.</span></h2>
          <div className="about-text">
            <p>My work brings together AI agents, large language models, machine learning, and business-process automation to help simplify operational workflows.</p>
            <p>I work with Microsoft AI and Power Platform technologies, connecting services, structured business data, and automated workflows to build practical enterprise solutions.</p>
            <p>I am interested in developing reliable AI systems that do more than answer questions: systems that help users take action, coordinate tasks, and make better-informed decisions.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section-wrap section-block projects-section">
        <SectionHeading eyebrow="SELECTED WORK / 02" title="Projects I’ve worked on" note="A selection of AI, machine-learning, and automation projects. Detailed case studies can be added as the portfolio evolves." />
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`project-card accent-${project.accent}`} key={project.number}>
                <div className="project-card-top"><span>{project.number}</span><span className="project-icon"><Icon size={20} /></span></div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-detail"><p>{project.details}</p></div>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-card-footer"><span>PROJECT OVERVIEW</span><ArrowUpRight size={17} /></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="section-block skills-section">
        <div className="section-wrap">
          <SectionHeading eyebrow="TECHNICAL TOOLKIT / 03" title="Technologies I work with" note="A selection of technologies relevant to my AI engineering and enterprise automation work." />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-header"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-wrap section-block experience-section">
        <SectionHeading eyebrow="EXPERIENCE / 04" title="Professional journey" />
        <article className="experience-card">
          <div className="experience-marker"><BriefcaseBusiness size={19} /></div>
          <div className="experience-main">
            <div className="experience-head">
              <div><h3>AI Engineer</h3><p>Encloud Tech Solutions <span>· Pune, India</span></p></div>
              <span className="date-pill">April 2026 – Present</span>
            </div>
            <ul>
              <li>Developed workflow automation and structured data solutions supporting enterprise AI-agent processes.</li>
              <li>Contributed to employee-service workflows, onboarding automation, and integrations across Microsoft business applications.</li>
              <li>Worked on resume-screening workflow components involving email intake, text extraction, candidate analysis, data storage, and HR notifications.</li>
              <li>Worked with Microsoft services and components including Teams, Adaptive Cards, Outlook, Power Apps, and Dataverse.</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="section-wrap section-block credentials-section">
        <div className="credential-column">
          <p className="eyebrow">EDUCATION / 05</p>
          <div className="credential-icon"><GraduationCap size={21} /></div>
          <h3>B.Tech in Computer Science &amp; Engineering</h3>
          <p>Vishwakarma University, Pune</p>
          <span className="muted-text">2022 – 2026</span>
        </div>
        <div className="credential-column certifications-column">
          <p className="eyebrow">CERTIFICATIONS / 06</p>
          {certifications.map((cert) => (
            <div className="certification-row" key={cert.name}>
              <span className="cert-check"><Check size={15} /></span>
              <div><h4>{cert.name}</h4><p>{cert.issuer} <span>· {cert.date}</span></p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap section-block highlights-section">
        <div className="highlight-panel">
          <div><p className="eyebrow">BEYOND THE BUILD</p><h2>Curiosity that goes beyond the screen.</h2></div>
          <div className="highlight-content">
            <div className="highlight-item"><span className="highlight-symbol">↗</span><div><h3>University-Level IoT Hackathon</h3><p>Second-place finish.</p></div></div>
            <div className="highlight-item"><span className="highlight-symbol">⌘</span><div><h3>Research interests</h3><p>IoT-Based Home Automation; Blockchain-Based E-Voting System with Facial Recognition.</p></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-wrap contact-inner">
          <div><p className="eyebrow">GET IN TOUCH / 07</p><h2>Let’s build something <span>intelligent.</span></h2><p className="contact-copy">Interested in AI engineering, agentic systems, or enterprise automation? Let’s connect.</p></div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:prajwaldeotare673@gmail.com"><Mail size={19} /> prajwaldeotare673@gmail.com <ArrowRight size={18} /></a>
            <div className="contact-socials"><a href="https://www.linkedin.com/in/prajwal-deotare" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/Prajwal-Deotare" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">PD<span>.</span></a>
        <p>Designed and built with Next.js, React, and Tailwind CSS.</p>
        <a href="#home">Back to top <ArrowUpRight size={14} /></a>
      </footer>

      <button className={`chat-launcher ${chatOpen ? "launcher-open" : ""}`} onClick={() => setChatOpen((open) => !open)} aria-label={chatOpen ? "Close portfolio assistant" : "Open portfolio assistant"} title="Ask the portfolio assistant">
        {chatOpen ? <X size={22} /> : <Bot size={24} />}
        <span className="launcher-ping" />
      </button>

      {chatOpen && (
        <aside className="chat-panel" aria-label="Portfolio assistant">
          <div className="chat-header"><div className="chat-avatar"><Bot size={19} /></div><div><strong>Portfolio Assistant</strong><span><i /> Available for questions</span></div><button onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={18} /></button></div>
          <div className="chat-messages" aria-live="polite">
            {chatMessages.map((message, index) => <div key={index} className={`chat-message ${message.from === "user" ? "message-user" : "message-assistant"}`}>{message.text}</div>)}
            <div className="quick-questions"><button onClick={() => { setChatInput("Tell me about the projects"); }}>Projects</button><button onClick={() => { setChatInput("What are your skills?"); }}>Skills</button><button onClick={() => { setChatInput("How can I contact you?"); }}>Contact</button></div>
          </div>
          <form className="chat-form" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
            <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Ask about my work..." aria-label="Ask the portfolio assistant" />
            <button type="submit" aria-label="Send message"><Send size={17} /></button>
          </form>
          <p className="chat-disclaimer">Answers are based on information published on this portfolio.</p>
        </aside>
      )}
    </main>
  );
}
