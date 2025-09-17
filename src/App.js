import React, { useState } from 'react';

// Light Blue Multipage Portfolio - Single-file React component
// Uses Tailwind classes (assumes Tailwind is available in the project)
// Default export is a single React component that renders a multi-page portfolio

export default function AbelLochiPortfolio() {
  const [route, setRoute] = useState('home');

  const NavLink = ({ id, children }) => (
    <button
      onClick={() => setRoute(id)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none ${
        route === id ? 'bg-white/30 text-sky-900' : 'hover:bg-white/10 text-white'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100/60 to-white text-slate-800">
      <header className="bg-sky-500/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-white font-bold">LA</div>
            <div>
              <h1 className="text-white font-semibold">LOCHI ABEL EKALI</h1>
              <p className="text-sm text-sky-100/90">Lawyer & Certified Professional Mediator</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink id="home">Home</NavLink>
            <NavLink id="about">About</NavLink>
            <NavLink id="experience">Experience</NavLink>
            <NavLink id="education">Education</NavLink>
            <NavLink id="skills">Skills</NavLink>
            <NavLink id="contact">Contact</NavLink>
            <NavLink id="resume">Resume</NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {route === 'home' && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 bg-white/70 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-sky-900 mb-2">Hello — I’m Lochi Abel</h2>
              <p className="text-slate-700 leading-relaxed">A dedicated lawyer and Certified Professional Mediator with strong skills in legal research, drafting, and client counselling. This portfolio highlights experience, education, projects, and contact details. Scroll or use the nav to explore.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-sky-50 border border-sky-100">
                  <h3 className="text-sm font-semibold text-sky-800">Current Role</h3>
                  <p className="text-sm text-slate-700 mt-1">Pupillage — DLA Piper Africa (IKM Advocates)</p>
                </div>
                <div className="p-4 rounded-lg bg-sky-50 border border-sky-100">
                  <h3 className="text-sm font-semibold text-sky-800">Certifications</h3>
                  <p className="text-sm text-slate-700 mt-1">Certified Professional Mediator; Data Protection; IP & Privacy courses</p>
                </div>
              </div>
            </div>

            <aside className="bg-white/90 rounded-2xl p-6 shadow-md">
              <h3 className="text-sky-800 font-semibold">Contact</h3>
              <ul className="mt-3 text-slate-700 text-sm space-y-2">
                <li className="break-words">Email: <a className="text-sky-600 underline" href="#">lochiabel24@gmail.com</a></li>
                <li>Location: Nairobi , Kenya</li>
              </ul>

              <div className="mt-6">
                <button onClick={() => setRoute('contact')} className="w-full rounded-md py-2 bg-sky-500 text-white font-medium">Get in touch</button>
              </div>
            </aside>
          </section>
        )}

        {route === 'about' && (
          <section className="bg-white/90 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sky-900">About Me</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">A concise professional introduction, values, and what motivates the work (integrity, professionalism, commitment). Include a short summary of legal strengths such as drafting, analysis, and mediation capabilities.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sky-800">Core Values</h4>
                <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
                  <li>Hard work</li>
                  <li>Integrity</li>
                  <li>Professionalism</li>
                  <li>Commitment</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sky-800">Languages</h4>
                <p className="mt-2 text-sm text-slate-700">English, Swahili</p>
              </div>
            </div>
          </section>
        )}

        {route === 'experience' && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-sky-900">Experience</h2>

            <article className="bg-white/90 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold">Pupillage — DLA Piper Africa (IKM Advocates)</h3>
              <p className="text-sm text-slate-700 mt-2">February 2025 - Present</p>
              <ul className="mt-3 text-slate-700 list-disc list-inside">
                <li>Legal research and analysis; drafting opinions and correspondences.</li>
                <li>Attending court sessions and client meetings; assisting partners and associates.</li>
                <li>Identifying tenders and preparing pitches and training materials.</li>
              </ul>
            </article>

            <article className="bg-white/90 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold">Legal Internship — CK Advocates LLP</h3>
              <p className="text-sm text-slate-700 mt-2">July 2023 - August 2024</p>
              <ul className="mt-3 text-slate-700 list-disc list-inside">
                <li>Drafting pleadings, applications and submissions; e-filing and case tracking.</li>
                <li>Client interviews, counseling and court support.</li>
              </ul>
            </article>

            <article className="bg-white/90 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold">Academic Legal Writing — Freelance</h3>
              <p className="text-sm text-slate-700 mt-2">April 2020 - February 2024</p>
              <p className="mt-3 text-slate-700">Freelance legal research, writing and document review.</p>
            </article>
          </section>
        )}

        {route === 'education' && (
          <section className="bg-white/90 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sky-900">Education</h2>

            <div className="mt-4 space-y-4">
              <div className="p-4 rounded-lg border border-sky-100">
                <h4 className="font-semibold">Bachelor of Laws (LL.B) — Moi University</h4>
                <p className="text-sm text-slate-700">Sept 2019 - Apr 2023 — Second Class Honors (Upper Division)</p>
              </div>

              <div className="p-4 rounded-lg border border-sky-100">
                <h4 className="font-semibold">Postgraduate Diploma (ATP) — Kenya School of Law</h4>
                <p className="text-sm text-slate-700">Feb 2024 - November 2024</p>
              </div>

              <div className="p-4 rounded-lg border border-sky-100">
                <h4 className="font-semibold">KCSE — Maseno School</h4>
                <p className="text-sm text-slate-700">Feb 2015 - Nov 2018</p>
              </div>
            </div>
          </section>
        )}

        {route === 'skills' && (
          <section className="bg-white/90 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sky-900">Skills & Tools</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sky-800">Legal Skills</h4>
                <ul className="mt-2 text-slate-700 list-disc list-inside">
                  <li>Legal research & analysis</li>
                  <li>Drafting opinions, pleadings and correspondences</li>
                  <li>Client interview & counselling</li>
                  <li>Mediation & dispute resolution</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sky-800">Technical & Other</h4>
                <ul className="mt-2 text-slate-700 list-disc list-inside">
                  <li>Microsoft Office</li>
                  <li>Judiciary e-filing and case tracking systems</li>
                  <li>Data protection & privacy fundamentals</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-sky-800">Professional Courses & Certifications</h4>
              <ul className="mt-2 text-slate-700 list-disc list-inside">
                <li>Karl Mediation & Arbitration Centre — Certified Professional Mediator (2024)</li>
                <li>Strathmore University — Data Protection Course (2024)</li>
                <li>Coursera: IP Law, Privacy & Data Protection, Anti-Corruption (2023)</li>
              </ul>
            </div>
          </section>
        )}

        {route === 'contact' && (
          <section className="bg-white/90 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sky-900">Contact</h2>
            <p className="mt-3 text-slate-700">I'd love to hear from you — for client work, collaboration or speaking opportunities.</p>

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! This form demo does not send messages yet.'); }}>
              <input placeholder="Your name" required className="col-span-2 p-3 rounded-md border border-sky-100" />
              <input placeholder="Your email" type="email" required className="col-span-2 p-3 rounded-md border border-sky-100" />
              <textarea placeholder="Message" rows={5} className="col-span-2 p-3 rounded-md border border-sky-100" required />
              <button type="submit" className="col-span-2 py-2 rounded-md bg-sky-500 text-white font-medium">Send message</button>
            </form>

            <div className="mt-6 text-sm text-slate-700">
              <p>Direct email and phone are available in the header/contact panel.</p>
            </div>
          </section>
        )}

        {route === 'resume' && (
          <section className="bg-white/90 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sky-900">Resume</h2>
            <p className="mt-3 text-slate-700">This page contains a printable, structured resume view and links to download the full PDF.</p>
            <div className="mt-6 space-y-4">
              {/* Compact resume layout - expand as needed */}
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Professional Summary</h3>
                <p className="text-sm text-slate-700 mt-2">A motivated lawyer with experience in pupillage, internships, and freelance legal writing. Skilled in research, drafting and mediation.</p>
              </div>

              <div className="flex gap-3">
                <a className="inline-block px-4 py-2 rounded-md bg-sky-500 text-white" href="#" onClick={(e)=>{e.preventDefault(); alert('Pretend to download - in real use replace with actual file URL.')}}>Download PDF</a>
                <a className="inline-block px-4 py-2 rounded-md border border-sky-300" href="#" onClick={(e)=>{e.preventDefault(); setRoute('contact');}}>Request updates</a>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-20 py-8 bg-sky-50 border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600">© {new Date().getFullYear()} Lochi Abel — Built with a light blue theme. Designed for printing and presentation.</div>
      </footer>
    </div>
  );
}
