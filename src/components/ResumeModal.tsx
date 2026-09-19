import { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${PORTFOLIO_DATA.fullName}
${PORTFOLIO_DATA.title} | KL University (CGPA: 9.17 / 10)
Email: ${PORTFOLIO_DATA.contact.email} | Phone: ${PORTFOLIO_DATA.contact.phone}
Location: ${PORTFOLIO_DATA.contact.location}
GitHub: ${PORTFOLIO_DATA.contact.github} | LinkedIn: ${PORTFOLIO_DATA.contact.linkedin}

--- PROFESSIONAL SUMMARY ---
${PORTFOLIO_DATA.about.p1}
${PORTFOLIO_DATA.about.p2}

--- EDUCATION ---
- B.Tech in Computer Science Engineering
  KL University | 2023 - 2027 | CGPA: 9.17 / 10
- Intermediate (Higher Secondary Education)
  Sri Chaitanya Junior College | 2021 - 2023 | Percentage: 91%

--- CERTIFICATIONS ---
- AWS Certified Cloud Practitioner - Amazon Web Services (AWS)
- HackerRank SQL Skill Certification

--- TECHNICAL SKILLS ---
- Programming: Java, Python, MySQL
- Web Technologies: HTML, CSS, JavaScript, React.js, Spring Boot
- Tools: GitHub, VS Code, Git
- Core Subjects: Data Structures & Algorithms, Object-Oriented Programming (OOP)

--- PROJECTS ---
1. Digital Wallet Application
   Stack: React.js | Spring Boot | MySQL
   - Developed a secure full-stack digital wallet application.
   - Implemented authentication, secure transactions, and RESTful APIs.
   - Built responsive React.js interfaces integrated with MySQL backend.

2. Stock Market Prediction Web Application
   Stack: React.js | Python | MySQL
   - Developed a stock prediction application using historical market data.
   - Integrated React frontend, Python backend, and MySQL database.
   - Designed dashboards and automated email notifications.

--- EXPERIENCE & EXTRACURRICULARS ---
- Volunteer - KL University Hackathon: Assisted in organizing hackathons and coordinating participants.
- Extracurriculars:
  * Sports: Cricket, Volleyball
  * Club Activities: Active Member, Focus Club
  * Public Speaking: Participated in Debate Competitions
  * Community Service: Volunteered in College Initiatives
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="resume-view-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-6 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-slate-100 text-sm sm:text-base">
              Resume • {PORTFOLIO_DATA.fullName}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-500 hover:bg-cyan-600 transition flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-black/60 flex justify-center">
          <div 
            id="printable-resume-paper"
            className="w-full max-w-[210mm] bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-lg font-sans text-left space-y-6"
          >
            {/* Resume Header */}
            <div className="border-b border-slate-200 pb-5">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {PORTFOLIO_DATA.fullName}
                  </h1>
                  <p className="text-sm font-semibold text-cyan-800 mt-1">
                    B.Tech Computer Science Engineering • KL University (CGPA: 9.17 / 10)
                  </p>
                </div>
                <div className="text-right text-xs text-slate-600 hidden sm:block">
                  <div>B.Tech CSE: <strong>2023 - 2027</strong></div>
                  <div>Intermediate: <strong>91% Distinction</strong></div>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-2">
                {PORTFOLIO_DATA.subheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-3 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {PORTFOLIO_DATA.contact.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {PORTFOLIO_DATA.contact.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  KL University, Andhra Pradesh
                </span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-100 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2 text-xs">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-baseline">
                    <div>
                      <strong className="text-slate-900">{edu.institution}</strong> – {edu.degree}
                    </div>
                    <div className="text-right text-slate-700 font-semibold">
                      {edu.period} | {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-100 pb-1 mb-2">
                Technical Skills &amp; Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-900">Programming: </span>
                  <span className="text-slate-700">Java, Python, MySQL</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Web Technologies: </span>
                  <span className="text-slate-700">HTML, CSS, JavaScript, React.js, Spring Boot</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Tools: </span>
                  <span className="text-slate-700">GitHub, VS Code, Git</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Core Subjects: </span>
                  <span className="text-slate-700">Data Structures &amp; Algorithms, OOP</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-xs">
                <span className="font-semibold text-slate-900">Certifications: </span>
                <span className="text-slate-700">AWS Certified Cloud Practitioner (AWS), HackerRank SQL Skill Certification</span>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-100 pb-1 mb-2">
                Projects
              </h2>
              <div className="space-y-3 text-xs">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between items-baseline">
                      <strong className="text-slate-900">{proj.title}</strong>
                      <span className="text-cyan-800 font-medium text-[11px]">{proj.badge}</span>
                    </div>
                    <ul className="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                      {proj.keyHighlights.map((hl, idx) => (
                        <li key={idx}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Extracurriculars */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-100 pb-1 mb-2">
                Experience &amp; Extracurriculars
              </h2>
              <div className="text-xs space-y-2">
                <div>
                  <strong className="text-slate-900">Volunteer - KL University Hackathon: </strong>
                  <span className="text-slate-700">Assisted in organizing hackathons and coordinating participants.</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-slate-700">
                  <div>• <strong>Sports:</strong> Cricket, Volleyball</div>
                  <div>• <strong>Club Activities:</strong> Active Member, Focus Club</div>
                  <div>• <strong>Public Speaking:</strong> Participated in Debate Competitions</div>
                  <div>• <strong>Community Service:</strong> Volunteered in College Initiatives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
