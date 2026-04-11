import { createFadeInUp } from "@/lib/animations";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 sm:px-8 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div {...createFadeInUp(0.6)} className="max-w-4xl">
          <div className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-400">
            About Me
          </div>
          <h2
            className="mb-12 font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Building the web,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              one component at a time
            </span>
          </h2>
          <div className="grid gap-8 text-lg text-gray-400 leading-relaxed">
            <p className="text-xl leading-relaxed">
              Full Stack Engineer based in Kochi, Kerala, building modern,
              high-performance web applications. At{" "}
              <span className="text-foreground font-medium">
                Iridia Solutions
              </span>
              , I work with Next.js, React, and Node.js to deliver scalable and
              production-ready solutions.
            </p>

            <p className="leading-relaxed">
              My approach combines{" "}
              <span className="text-foreground">performance</span>,{" "}
              <span className="text-foreground">scalability</span>, and{" "}
              <span className="text-foreground">clean system design</span>. I
              focus on building applications that are fast, maintainable, and
              optimized for both users and search engines.
            </p>

            <p className="leading-relaxed">
              I’m passionate about crafting seamless user experiences, writing
              clean and efficient code, and continuously pushing the boundaries
              of modern web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
