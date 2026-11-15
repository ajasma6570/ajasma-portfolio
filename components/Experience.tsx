import { motion } from "motion/react";
import { createFadeInUp } from "@/lib/animations";

export default function Experience() {
  const experience = [
    {
      company: "Difinity Digital (HLB Hamt Infotech), Kochi",
      role: "Frontend Developer",
      period: "August 2026 – Present",
      description:
        "Contributing to the development of Praszo, an enterprise SaaS product using React.js, TypeScript, and Material UI. Developing reusable UI components, implementing server-side data fetching, filtering, sorting, and pagination with TanStack Query and MUI DataGrid. Managing application state using Zustand, integrating RESTful APIs with a .NET backend, and developing organization management, user management, and subscription workflows. Implementing authentication, protected routes, role-based access control, and end-to-end testing using Playwright.",
    },
    {
      company: "Iridia Solutions",
      role: "Full Stack Developer",
      period: "May 2024 – July 2026",
      description:
        "Building scalable web applications with Next.js and modern tech stack. Leading frontend architecture, implementing SEO best practices, and optimizing application performance.",
    },
  ];
  return (
    <section
      id="experience"
      className="relative py-32 px-6 sm:px-8 lg:px-12 border-t border-white/[0.03] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div {...createFadeInUp()} className="mb-20">
          <div className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-400">
            Experience
          </div>
          <h2
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Work History
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              {...createFadeInUp()}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 pb-16 last:pb-0"
            >
              <div className="absolute left-0 top-0 bottom-0">
                <div className="sticky top-32">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50" />
                  {index < experience.length - 1 && (
                    <div className="absolute top-3 left-1/2 w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent -translate-x-1/2" />
                  )}
                </div>
              </div>
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {exp.role}
                      </h3>
                      <div className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                        {exp.company}
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/20">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
