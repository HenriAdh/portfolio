"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const SmoothScroll: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleClick = async (e: PointerEvent) => {
      if (!e.target) return;

      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Adiciona classe de loading ao link clicado
          target.classList.add("scrolling");

          // Calcula a posição do elemento alvo
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px de offset para o header

          // Animação personalizada com easing
          const startPosition = window.pageYOffset;
          const distance = offsetPosition - startPosition;
          const duration = 800;
          let startTime: number | null = null;

          const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = easeOutQuart(progress);

            window.scrollTo(0, startPosition + distance * easeProgress);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              target.classList.remove("scrolling");
              // Atualiza a URL
              router.push(href, { scroll: false });
            }
          };

          requestAnimationFrame(animation);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  return children;
};
