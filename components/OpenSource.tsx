import { createFadeInUp } from "@/lib/animations";
import { motion } from "motion/react";

export default function OpenSource() {
  const openSource = [
    { name: "Kalmia", description: "Open source contribution" },
    { name: "Sylve", description: "Open source contribution" },
    { name: "Signify", description: "Open source contribution" },
  ];

  return (
    <section className="relative py-32 px-6 sm:px-8 lg:px-12 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...createFadeInUp()} className="mb-16">
          <div className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-400">
            Open Source
          </div>
          <h2
            className="mb-6 font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Community Contributions
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {openSource.map((project, index) => (
            <motion.div
              key={project.name}
              {...createFadeInUp()}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

              <div className="relative">
                <div className="mb-6 p-3 w-fit bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <span className="icon-[mingcute--github-line] w-6 h-6 "></span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
