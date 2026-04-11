export const createFadeInUp = (
    delay = 0,
    duration = 0.6
) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
});