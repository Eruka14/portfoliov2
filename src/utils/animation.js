import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const animate = () => {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  const name = document.getElementById("hero__name");
  const about = document.getElementById("about__content-animation");
  const hero__title = document.getElementById("hero__title-animation");
  const hero__description = document.getElementById(
    "hero__description-animation"
  );

  const hero__btn = document.querySelector(".hero__btn");
  const listItems = document.querySelectorAll(".about__list");
  const work = document.querySelectorAll(".work__animation");
  const contact = document.getElementById("contact__animation");
  const elementsToAnimate = contact.querySelectorAll(
    ".contact__title, .contact__description, .contact__via, .contact__list"
  );
  const footerTitle = document.querySelector(".footer__title");

  gsap.to(name, {
    duration: 3,
    text: "Erdenegarav 👋",
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1, // Repeat indefinitely
  });

  gsap.from(hero__title, {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power1.in",
    scrollTrigger: {
      trigger: hero__title,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from([hero__description, hero__btn], {
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.5,
    delay: 0.5,
    ease: "power1.in",
    scrollTrigger: {
      trigger: hero__description,
      start: "top bottom",
      toggleActions: "play none none none",
    },
  });

  gsap.from(about.querySelectorAll("p"), {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: about,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Apply bounce.out animation
  gsap.from(listItems, {
    duration: 1,
    opacity: 0,
    y: -50, // Start from above
    ease: "bounce.out",
    stagger: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: about,
      start: "top 20%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(work, {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: work,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(elementsToAnimate, {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: contact,
      start: "top bottom",
      toggleActions: "play none none none",
    },
  });

  gsap.to(footerTitle, {
    duration: 8, // Total duration for the entire color cycle
    keyframes: [
      { color: "#FF5733", duration: 1.4 },
      { color: "#33FF57", duration: 1.4 },
      { color: "#3357FF", duration: 1.4 },
      { color: "#FF33A1", duration: 1.4 },
      { color: "#33FFF5", duration: 1.4 },
      { color: "#F5FF33", duration: 1.4 },
      { color: "#FF8C33", duration: 1.4 },
    ],
    ease: "none",
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Reverse the animation back to the start
  });
};

export default animate;
