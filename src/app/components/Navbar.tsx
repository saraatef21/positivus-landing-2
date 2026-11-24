"use client";

import { useState } from "react";
import Container from "./Container";

const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-6 lg:py-12">
      <Container>
        <div className="flex items-center justify-between">
          <img src="/images/logo.svg" alt="Positivus" className="h-8 lg:h-9" />

          <nav className="hidden items-center gap-10 xl:flex">
            {links.map((link) => (
              <a key={link} href="#" className="text-xl hover:underline">
                {link}
              </a>
            ))}
            <a href="#contact" className="rounded-2xl border border-dark px-9 py-5 text-xl">
              Request a quote
            </a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl xl:hidden">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-6 flex flex-col gap-4 rounded-3xl bg-light-pink p-6 xl:hidden">
            {links.map((link) => (
              <a key={link} href="#" className="text-lg">
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-2xl bg-dark px-9 py-5 text-center text-lg text-white"
            >
              Request a quote
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
}
