import { useCallback } from "react";

export const useScrollToSection = (closeMenu?: () => void) => {
    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLElement>, targetId: string) => {
            e.preventDefault();

            if (closeMenu) closeMenu();

            const element = document.getElementById(targetId);

            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        },
        [closeMenu]
    );

    return { handleNavClick };
};