import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Animate landing text elements
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.15,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      delay: 0.3,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Alternating text animation
  const pairs = [
    [".landing-h2-info", ".landing-h2-info-1"],
    [".landing-h2-1", ".landing-h2-2"]
  ];

  pairs.forEach(([elem1, elem2]) => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const delay = 4;
    const delay2 = delay * 2 + 1;

    tl.fromTo(
      elem2,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        delay: delay,
      },
      0
    )
      .fromTo(
        elem1,
        { y: 80 },
        {
          duration: 1.2,
          ease: "power3.inOut",
          y: 0,
          delay: delay2,
        },
        1
      )
      .fromTo(
        elem1,
        { y: 0 },
        {
          y: -80,
          duration: 1.2,
          ease: "power3.inOut",
          delay: delay,
        },
        0
      )
      .to(
        elem2,
        {
          y: -80,
          duration: 1.2,
          ease: "power3.inOut",
          delay: delay2,
        },
        1
      );
  });
}
