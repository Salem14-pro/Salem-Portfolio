import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<HTMLElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<HTMLElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: HTMLElement) => {
    para.classList.add("visible");
    
    gsap.from(para, {
      scrollTrigger: {
        trigger: para.parentElement?.parentElement,
        toggleActions: ToggleAction,
        start: TriggerStart,
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out"
    });
  });
  titles.forEach((title: HTMLElement) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title.parentElement?.parentElement,
        toggleActions: ToggleAction,
        start: TriggerStart,
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power2.inOut"
    });
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
