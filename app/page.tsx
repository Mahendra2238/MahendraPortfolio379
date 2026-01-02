"use client";
import type React from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { useReveal } from "@/hooks/use-reveal"
import { SkillBar } from "@/components/skill-bar"
import { ContactForm } from "@/components/contact-form"

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  const ref = useReveal<HTMLElement>()
  return (
    <section id={id} ref={ref} className="scroll-mt-24 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-pretty text-2xl font-semibold">{title}</h2>
        <div className="grid gap-4">{children}</div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Home / Hero */}
      <section id="home" className="scroll-mt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 pb-12 pt-16 md:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-4">
            <h1 className="text-balance text-2xl font-bold md:text-5xl">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Mahendra</span>
            </h1>
            <p className="mt-2 text-lg md:text-2xl text-gray-700 dark:text-gray-300">
              Software & Full-Stack Developer | AI/ML Enthusiast | Final-Year CSE Student
            </p>

      
            <p className="text-muted-foreground">
              Motivated Computer Science Engineer with strong programming and problem-solving skills. I design scalable software and modern web applications, and actively explore AI/ML to solve real-world problems.
            </p>
      
            {/* Main CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex h-10 items-center justify-center rounded-lg border bg-blue-600 px-4 text-white transition hover:shadow-lg dark:bg-blue-500"
                href="https://github.com/Mahendra2238"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-lg border bg-card px-4 transition hover:shadow-lg"
                href="/assets/resume/Resume.pdf"
                download
              >
                Download Resume
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-lg border bg-card px-4 transition hover:shadow-lg"
                href="https://www.linkedin.com/in/mahendra-gaddam-a77221299/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
      
            {/* Contact Info */}
            <ul className="grid list-none gap-1 p-0 text-sm">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:mahendragaddam379@gmail.com"
                  className="underline decoration-blue-600/30 underline-offset-4"
                >
                  mahendragaddam379@gmail.com
                </a>
              </li>
{/*               <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917659072238" className="underline decoration-blue-600/30 underline-offset-4">
                  +91 7659072238
                </a>
              </li> */}
              <li>
                <strong>Location:</strong> Warangal, India
              </li>
            </ul>
          </div>
      
          {/* Photo & Stats */}
          <div className="grid gap-4">
            <Image
              src="/mahiphoto.jpg"
              alt="Portrait"
              width={280}
              height={300}
              className="h-60 w-56 rounded-xl border object-cover object-top shadow-xl md:h-75 md:w-72 md:justify-self-end"
            />
            <div className="flex gap-3">
              {[
                { value: "9.28", label: "B.Tech CGPA" },
                { value: "2", label: "Internships" },
                { value: "10+", label: "Projects" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="min-w-[110px] flex-1 rounded-xl border bg-card p-3 text-center shadow-sm"
                >
                  <div className="text-xl font-extrabold">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      

      {/* About */}
      <Section id="about" title="About">
        <p className="text-muted-foreground">
          I’m a Computer Science Student skilled in Python, Java, web development, and AI/ML. I enjoy solving complex problems, building reliable applications, and adapting quickly to new technologies. With strong academics and diverse projects, I’m ready to contribute to software development roles across domains.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h3 className="mb-1 text-base font-semibold">What I Do</h3>
            <p className="text-sm text-muted-foreground">
              Design and develop scalable software and web applications with clean architecture, efficient code, and responsive UI.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h3 className="mb-1 text-base font-semibold">Strengths</h3>
            <p className="text-sm text-muted-foreground">
              Strong problem-solving, teamwork, leadership, and adaptability—applied across software development projects and collaborative environments.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h3 className="mb-1 text-base font-semibold">Languages</h3>
            <p className="text-sm text-muted-foreground">
              English (Fluent), Hindi (Fluent), Telugu (Native), Spanish (Beginner)
            </p>
          </div>
        </div>
      </Section>

     {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Languages */}
          <div className="rounded-xl border bg-card p-4 shadow-sm space-y-2">
            <h3 className="text-base font-semibold">Languages</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {["C", "Python", "Java", "C++", "C#", "SQL"].map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
            
          {/* Web Development */}
          <div className="rounded-xl border bg-card p-4 shadow-sm space-y-2">
            <h3 className="text-base font-semibold">Web Development</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {["HTML", "CSS", "JavaScript", "PHP", "AngularJS", "MERN Stack", "REST APIs"].map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
            
          {/* Databases & AI/ML */}
          <div className="rounded-xl border bg-card p-4 shadow-sm space-y-2">
            <h3 className="text-base font-semibold">Databases & AI/ML</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                "MySQL",
                "PL/SQL",
                "MongoDB",
                "TensorFlow",
                "PyTorch",
                "Scikit-learn",
                "Pandas",
                "NumPy",
                "CNN",
                "NLTK",
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
            
        {/* Tools & Platforms */}
        <div className="mt-8 rounded-xl border bg-card p-4 shadow-sm space-y-2">
          <h3 className="text-base font-semibold">Tools & Platforms</h3>
          <ul className="flex flex-wrap gap-2 text-sm">
            {["AWS", "Git", "GitHub", "Linux", "Google Colab", "Jupyter Notebook", "VS Code"].map((s) => (
              <li
                key={s}
                className="rounded-md bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ol className="border-l-2 border-dashed pl-4">
          {[
            {
              title: "Full Stack Web Development Intern (Virtual) — A.N.D Intern",
              meta: "Jun 2024 – Aug 2024 (Virtual)",
              points: [
                "Built web apps including portfolio, form validation, Amazon landing page, and weather API integration.",
                "Strengthened HTML, CSS, and JavaScript fundamentals through project-based learning.",
                "Practiced version control and collaborative workflows with GitHub.",
              ],
            },
            {
              title: "AI & ML Intern (Virtual) — Gustovalley Technovations",
              meta: "Apr 2024 – May 2024 (Virtual)",
              points: [
                "Explored supervised learning concepts and dataset preprocessing using NumPy and Pandas.",
                "Built ML prototypes through model experimentation and dataset handling.",
                "Understood real-world AI/ML applications through guided projects.",
              ],
            },
            {
              title: "Trainee (Python & ASP.NET) — Softwayz IT Solutions",
              meta: "Dec 2022 – May 2023",
              points: [
                "Practiced Python fundamentals with hands-on tasks.",
                "Gained exposure to ASP.NET and SQL integration concepts.",
                "Strengthened problem-solving and foundational software skills.",
              ],
            },
          ].map((item) => (
            <li key={item.title} className="relative pb-5 pl-3">
              <span className="absolute left-[-9px] top-1 h-3 w-3 rounded-full bg-green-500" />
              <div className="text-base font-semibold">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.meta}</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "SR University, Warangal",
              desc: "B.Tech in Computer Science — CGPA: 9.28/10.0",
              meta: "Aug 2023 – Jun 2026",
            },
            {
              title: "Government Polytechnic, Warangal",
              desc: "Diploma in Computer Science — CGPA: 9.74/10.0",
              meta: "Nov 2020 – May 2023",
            },
            {
              title: "St. Joseph Convent High School, Warangal",
              desc: "Secondary Education (SSC) — CGPA: 10.0/10.0",
              meta: "2019 – 2020",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="rounded-xl border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
              <p className="text-xs text-muted-foreground">{c.meta}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Movie Ticket Booking Interface",
              desc: "Interactive booking interface with dynamic seat selection and mock payment UI. Improved booking simulation efficiency by 30% and reduced errors by 20% with responsive design and validation.",
              tools: "HTML, CSS, JavaScript",
              img: "/movie-ticket-ui.png",
              link: "https://github.com/search?q=Movie+Ticket+Booking+user%3AMahendra2238",
              // demo: "https://movie-ticket-demo.vercel.app", // replace with actual demo
            },
            {
              title: "Real-Time Sign Language Recognition (CNN + OpenCV)",
              desc: "CNN-based model recognizing common sign gestures with ~85% accuracy on 1,000+ images. Real-time detection pipeline using OpenCV and preprocessing to reduce false predictions by 15%.",
              tools: "Python, TensorFlow, OpenCV, NumPy",
              img: "/sign-language-recognition.png",
              link: "https://github.com/search?q=Sign+Language+Recognition+user%3AMahendra2238",
              // demo: "https://signlang-demo.vercel.app", // replace with actual demo
            },
            {
              title: "Deepfake Detection & Attribution System",
              desc: "Multi-modal deepfake detection system identifying manipulated images, audio, and videos using deep learning. High-accuracy CNN-based pipelines with real-time inference for media authenticity verification.",
              tools: "Python, PyTorch, TensorFlow, CNN, XceptionNet",
              img: "/deepfake-detection.png", // optional, fallback works if missing
              link: "https://github.com/Mahendra2238/Deepfake-Detection-And-Attribution.git",
            },
            {
              title: "Online Invoice Generation System",
              desc: "Full-stack Java (JSP/Servlets) app with multi-user roles, product/customer management, secure login dashboards, and PDF downloads. Efficiently handled 1,000+ records.",
              tools: "Java, JSP, Servlets, MySQL, AngularJS",
              img: "/invoice-system.png",
              link: "https://github.com/Mahendra2238/Online_Invoice_Generation_System.git",
              // demo: "https://invoice-demo.vercel.app", // replace with actual demo
            },
          ].map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="overflow-hidden border-b">
                <Image
                  src={p.img || "/placeholder.svg"}
                  alt={`${p.title} screenshot`}
                  width={720}
                  height={400}
                  className="aspect-[18/10] w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <p className="text-xs text-muted-foreground"><strong>Tools:</strong> {p.tools}</p>
                <div className="flex gap-3">
                  <a
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition hover:bg-blue-600/10"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
{/*                   <a
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition hover:bg-green-600/10"
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a> */}
                </div>
              </div>
            </article>
          ))}
          
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications & Courses">
        <ul className="grid gap-3">
              <li className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm">
            <span>ServiceNow Certified System Administrator (CSA)</span>
            <a
              href="https://drive.google.com/file/d/1z0D25igkCXTEyMLL35pj4J25ZLHnM8WO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline">
              View
            </a>
          </li>
          <li className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm">
            <span>Theory of Computation — NPTEL</span>
            <a href="https://drive.google.com/file/d/1vQe8soNMnOta_PoRxA5Un6MPuowbuLFl/view" className="text-sm text-blue-600 hover:underline" aria-label="View NPTEL certificate">
              View
            </a>
          </li>
          <li className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm">
            <span>Cloud Virtual Internship — AWS (AICTE-Eduskills)</span>
            <a
              href="https://drive.google.com/file/d/1XwSQ-OJPDtvxtkyHzJYvfCmiBBe-8QCD/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
              aria-label="View AWS badge on Credly"
            >
              View
            </a>
          </li>
          <li className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm">
            <span>Data Structures and Algorithms — UC San Diego (Coursera)</span>
            <a href="https://www.coursera.org/account/accomplishments/verify/HRXVG54QNZU5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" className="text-sm text-blue-600 hover:underline" aria-label="View Coursera certificate">
              View
            </a>
          </li>
        </ul>
      </Section>

      {/* Resume */}
      <Section id="resume" title="Resume">
        <p className="text-sm text-muted-foreground">Download a copy of my resume or request one via email.</p>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex h-10 items-center justify-center rounded-lg border bg-blue-600 px-4 text-white transition hover:shadow-lg dark:bg-blue-500"
            href="/assets/resume/Resume.pdf"
            download
          >
            Download Resume
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-lg border bg-card px-4 transition hover:shadow-lg"
            href="mailto:mahendragaddam379@gmail.com?subject=Resume%20Request"
          >
            Request via Email
          </a>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid gap-4 md:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <ContactForm />
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h3 className="mb-2 text-base font-semibold">Reach me</h3>
            <ul className="grid list-none gap-1 p-0 text-sm">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:mahendragaddam379@gmail.com"
                  className="underline decoration-blue-600/30 underline-offset-4"
                >
                  mahendragaddam379@gmail.com
                </a>
              </li>
{/*               <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917659072238" className="underline decoration-blue-600/30 underline-offset-4">
                  +91 7659072238
                </a>
              </li> */}
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/mahendra-gaddam-a77221299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-blue-600/30 underline-offset-4"
                >
                  linkedin.com/in/mahendra-gaddam
                </a>
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              {/* Form submissions go to your Google Sheet. Paste your Apps Script URL in the contact form component. */}
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm">
          <p>© {new Date().getFullYear()} Mahendra Gaddam. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Mahendra2238"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahendra-gaddam-a77221299/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/917659072238"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
            <a
              href="https://www.credly.com/users/mahendra-gaddam.703927f9/badges#credly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Credly
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
