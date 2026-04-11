"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "./Hero";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import OpenSource from "./OpenSource";

const MotionLink = motion.create(Link);

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { handleNavClick } = useScrollToSection(() => setMobileMenuOpen(false));

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <MotionLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Ajas M A
            </MotionLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-4">
              <Link
                href="#about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "skills")}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "experience")}
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm text-center"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <Hero handleNavClick={handleNavClick} />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Open Source Section */}
      <OpenSource />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
