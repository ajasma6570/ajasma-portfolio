import { createFadeInUp } from "@/lib/animations";
import { Code2, Palette } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: Code2,
      color: "blue",
      items: [
        "Next.js",
        "React.js",
        "Svelte",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Shadcn UI",
        "Material UI",
        "Framer Motion",
        "GSAP",
        "Axios",
      ],
    },
    state: {
      title: "State Management",
      icon: Code2,
      color: "purple",
      items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query"],
    },
    backend: {
      title: "Backend & APIs",
      icon: Code2,
      color: "indigo",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "OAuth",
        "RBAC",
        "NextAuth.js",
        "Zod",
        "Adze",
        "Twilio",
        "EJS",
      ],
    },
    database: {
      title: "Database & ORM",
      icon: Code2,
      color: "cyan",
      items: ["PostgreSQL", "MongoDB", "Prisma ORM"],
    },
    cloud: {
      title: "Cloud & Deployment",
      icon: Code2,
      color: "violet",
      items: [
        "AWS",
        "Firebase",
        "Google Cloud Run",
        "Vercel",
        "Render",
        "Railway",
        "Coolify",
        "Nginx",
        "PM2",
        "Cloudinary",
        "SSL Certification",
      ],
    },
    payments: {
      title: "Payment Integration",
      icon: Code2,
      color: "emerald",
      items: ["Razorpay"],
    },
    tools: {
      title: "Tools & Others",
      icon: Palette,
      color: "amber",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Figma",
        "ESLint",
        "SEO Optimization",
      ],
    },
    learning: {
      title: "Familiar With",
      icon: Code2,
      color: "pink",
      items: ["Astro", "Redis", "React Native"],
    },
  };

  return (
    <section
      id="skills"
      className="relative py-32 px-6 sm:px-8 lg:px-12 border-t border-white/[0.03] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div {...createFadeInUp(0.6)} className="mb-20">
          <div className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-400">
            Skills & Technologies
          </div>
          <h2
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Technology Stack
          </h2>
        </motion.div>

        <div className="grid gap-8 md:gap-6">
          <motion.div
            {...createFadeInUp(0.6)}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <div className="ml-auto px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  Primary
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills)
              .slice(1)
              .map(([key, category], index) => (
                <motion.div
                  key={key}
                  {...createFadeInUp(0.6)}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2 rounded-lg bg-${category.color}-500/10 text-${category.color}-400`}
                    >
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill: string) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
