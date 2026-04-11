import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Hero({
  handleNavClick,
}: {
  handleNavClick: (e: React.MouseEvent<HTMLElement>, target: string) => void;
}) {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.02) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex items-center gap-2 text-muted-foreground"
          >
            <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="icon-[mynaui--map-pin] w-4 h-4"></span>
            <span className="text-sm tracking-wide">Kochi, Kerala, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="mb-6"
          >
            <h1
              className="mb-4 font-bold tracking-tight"
              style={{
                fontSize: "clamp(3rem, 10vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              <span className="block bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                Ajas M A
              </span>
            </h1>
            <div
              className="font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Full Stack Developer
              </span>
              <span className="block text-gray-400 mt-2">
                Building scalable, high-performance web applications
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl leading-relaxed text-muted-foreground mb-12 max-w-2xl"
          >
            Full Stack Developer specializing in building fast, scalable, and
            production-ready web applications. Experienced in Next.js, React,
            and Node.js, with a strong focus on performance, accessibility, and
            seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <MotionLink
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MotionLink>
            <MotionLink
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              Get in Touch
            </MotionLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <span className="text-sm text-muted-foreground">Connect</span>
            <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent" />
            <MotionLink
              href="https://github.com/ajasma6570"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5 rounded-lg"
            >
              <span className="icon-[mingcute--github-line] w-5 h-5 "></span>
            </MotionLink>
            <MotionLink
              href="www.linkedin.com/in/ajasma"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5 rounded-lg"
            >
              <span className="icon-[basil--linkedin-outline] w-5 h-5 "></span>
            </MotionLink>
            <MotionLink
              href="mailto:ajas@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5 rounded-lg"
            >
              <span className="icon-[material-symbols--mail-outline] w-5 h-5 "></span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/10 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
