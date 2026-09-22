import Link from "next/link";
import { brand, navItems } from "@/content/brand";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-white">{brand.name}</p>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              Personal brand. Production AI systems. {brand.location}.
            </p>
            <nav className="mt-4 flex flex-wrap gap-4 text-sm" aria-label="Footer">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 transition-colors hover:text-gray-300"
                >
                  {item.label}
                </a>
              ))}
              <Link href="/#contact" className="text-gray-500 transition-colors hover:text-gray-300">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex gap-4">
            <a
              href={brand.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={brand.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="p-2 text-gray-400 transition-colors hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-600">
          © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
