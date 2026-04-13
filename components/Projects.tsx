"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { createFadeInUp } from "@/lib/animations";

const MotionLink = motion.create(Link);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Arunachala Tractor CRM",
      description:
        "Full-stack CRM system for tractor service management with inventory tracking, customer management, and service scheduling.",
      tech: ["Next.js", "Express.js", "PostgreSQL", "Prisma"],
      category: "featured",
      github: "https://github.com/ajasma6570/arunachala-tarctor-crm.git",
    },
    {
      title: "Gym CRM Application",
      description:
        "Comprehensive gym management system with member dashboard, payment tracking, workout planning, and attendance monitoring.",
      tech: ["Next.js", "Serverless APIs", "PostgreSQL", "Tailwind CSS"],
      category: "featured",
      github: "https://github.com/ajasma6570/gym_website.git",
    },
    {
      title: "Wedding Bells",
      description:
        "MERN stack event management platform with role-based access control, vendor booking, and payment integration.",
      tech: ["MongoDB", "Express", "React", "Node.js", "RBAC"],
      category: "featured",
      github: "https://github.com/ajasma6570/weddingBells-MERN.git",
    },
    {
      title: "TenMillions E-commerce",
      description:
        "Full-featured e-commerce platform with product catalog, shopping cart, Razorpay payment gateway, and order management.",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
      category: "featured",
      live: "https://tenmillions-fashion-store.onrender.com/",
      github: "https://github.com/ajasma6570/Ten_Millions_Fashion_Store.git",
    },
    {
      title: "Heavenstone",
      description:
        "Corporate website with integrated chatbot for customer engagement and automated query handling.",
      tech: ["Next.js", "TypeScript", "Chatbot Integration"],
      category: "web",
      live: "https://www.heavenstone.in/",
    },
    {
      title: "Al Eliza Interiors",
      description:
        "Modern interior design portfolio website showcasing projects with image galleries and contact forms.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      live: "https://alelizainteriors.com/",
    },
    {
      title: "IP Technics",
      description:
        "Technology company website with dynamic blog, Google Reviews integration, and service showcase.",
      tech: ["Next.js", "TypeScript", "Google APIs"],
      category: "web",
      live: "https://iptechnics.com/",
    },
    {
      title: "Difuse",
      description:
        "Content platform with dynamic blog system, SEO optimization, and modern responsive design.",
      tech: ["Next.js", "MDX", "Tailwind CSS"],
      category: "web",
      live: "#",
      github: "#",
    },
    {
      title: "Prism of Stories",
      description:
        "Creative storytelling platform with modern UI/UX and content management capabilities.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      category: "web",
      live: "https://prismofstories.com/",
    },
    {
      title: "Perfetto Events",
      description:
        "Event management company website with service listings, portfolio, and booking inquiries.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      live: "https://perfetto-events.vercel.app/",
    },
    {
      title: "OLX Clone",
      description:
        "Classified ads marketplace clone with product listings, user authentication, and search functionality.",
      tech: ["React", "Node.js", "MongoDB"],
      category: "mini",
      github: "https://github.com/ajasma6570/OLX_React.git",
    },
    {
      title: "Netflix Clone",
      description:
        "Video streaming platform UI clone with movie browsing, categories, and responsive design.",
      tech: ["React", "CSS3", "REST APIs"],
      category: "mini",
      live: "https://ajasma6570.github.io/NetflixClone_React/",
      github: "https://github.com/ajasma6570/NetflixClone_React.git",
    },
    {
      title: "Family Travel Marker",
      description:
        "Interactive map application for tracking family travel destinations and memories.",
      tech: ["React", "PostgreSQL", "Maps API"],
      category: "mini",
      github:
        "https://github.com/ajasma6570/Family_Travel_Marker-PostgreSQL.git",
    },
    {
      title: "Calculator App",
      description:
        "Modern calculator application with standard and scientific operations.",
      tech: ["React", "CSS3"],
      category: "mini",
      github: "https://github.com/ajasma6570/Calculator_using_React.git",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 sm:px-8 lg:px-12 border-t border-white/[0.03] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div {...createFadeInUp()} className="mb-20">
          <div className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-400">
            Selected Work
          </div>
          <h2
            className="mb-8 font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Featured Projects
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              A collection of projects showcasing expertise in building modern,
              scalable web applications.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { label: "All", value: "all" },
                { label: "Featured", value: "featured" },
                { label: "Websites", value: "web" },
                { label: "Mini Projects", value: "mini" },
              ].map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.value
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-transparent group-hover:from-blue-500/10 group-hover:via-purple-500/5 transition-all duration-500 pointer-events-none" />

                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

                <div className="relative flex-1 flex flex-col">
                  {project.category === "featured" && (
                    <div className="mb-4">
                      <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20 font-medium">
                        Featured
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    {project.live && (
                      <MotionLink
                        href={project.live}
                        target="_blank"
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-foreground transition-colors"
                      >
                        <span className="icon-[tabler--external-link-filled] w-4 h-4 "></span>
                        Live
                        <span className="sr-only"> {project.title}</span>
                      </MotionLink>
                    )}

                    {project.github && (
                      <MotionLink
                        href={project.github}
                        whileHover={{ x: 2 }}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-foreground transition-colors"
                      >
                        <span className="icon-[mingcute--github-line] w-4 h-4 "></span>
                        Code
                        <span className="sr-only"> {project.title}</span>
                      </MotionLink>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
