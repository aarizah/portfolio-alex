import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2025 Alex Ariza. Full-Stack + AI · RAG/LLMs · Next.js/Node/FastAPI · Managed cloud delivery.
            </p>
            <div className="mt-2 flex gap-4 justify-center md:justify-start text-sm">
              <a href="#about" className="text-gray-500 hover:text-gray-300 transition-colors">About</a>
              <a href="#projects" className="text-gray-500 hover:text-gray-300 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-500 hover:text-gray-300 transition-colors">Skills</a>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/aarizah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/alex-ariza-herrera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arizah2020@gmail.com"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
