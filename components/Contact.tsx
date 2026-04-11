import { createFadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 sm:px-8 lg:px-12 border-t border-white/[0.03] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...createFadeInUp()}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-400">
            Get In Touch
          </div>
          <h2
            className="mb-8 font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              great together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <motion.div
            {...createFadeInUp()}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <MotionLink
              href="mailto:ajasma.dev@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-medium"
            >
              <span className="icon-[material-symbols--mail-outline] w-5 h-5 "></span>
              Email Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MotionLink>

            <MotionLink
              href="www.linkedin.com/in/ajasma"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium"
            >
              <span className="icon-[basil--linkedin-outline] w-5 h-5 "></span>
              LinkedIn
            </MotionLink>

            <MotionLink
              href="https://github.com/ajasma6570"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium"
            >
              <span className="icon-[mingcute--github-line] w-5 h-5 "></span>
              GitHub
            </MotionLink>
          </motion.div>

          <motion.div
            {...createFadeInUp()}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10"
          >
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-1">Email</div>
              <Link href="mailto:ajasma.dev@gmail.com">
                ajasma.dev@gmail.com
              </Link>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-1">Location</div>
              <div className="text-foreground">Kochi, Kerala</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
