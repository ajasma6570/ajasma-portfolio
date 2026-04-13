import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 sm:px-8 lg:px-12 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ajas M A
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-4">
            <MotionLink
              href="https://github.com/ajasma6570"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 text-gray-400 hover:text-foreground transition-colors hover:bg-white/5 rounded-lg"
            >
              <span className="icon-[mingcute--github-line] w-5 h-5 "></span>
              <span className="sr-only">Github</span>
            </MotionLink>
            <MotionLink
              href="https://www.linkedin.com/in/ajasma/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 text-gray-400 hover:text-foreground transition-colors hover:bg-white/5 rounded-lg"
            >
              <span className="icon-[basil--linkedin-outline] w-5 h-5 "></span>
              <span className="sr-only">linkedin</span>
            </MotionLink>
            <MotionLink
              href="mailto:ajasma.dev@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 text-gray-400 hover:text-foreground transition-colors hover:bg-white/5 rounded-lg"
            >
              <span className="icon-[material-symbols--mail-outline] w-5 h-5 "></span>
              <span className="sr-only">mail</span>
            </MotionLink>
          </div>

          <div className="text-sm text-muted-foreground">
            {" "}
            © {new Date().getFullYear()} Ajas M A.
          </div>
        </div>
      </div>
    </footer>
  );
}
