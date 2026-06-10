"use client";

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesAnimations = () => {
  useEffect(() => {
    const track = document.querySelector("#trackImgs");
    const section = document.querySelector("#case-studies");
    const stage = document.querySelector("#case-studies-stage");

    if (!track || !section || !stage) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - stage.clientWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + getDistance(),
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    const images = Array.from(track.querySelectorAll("img"));
    const refresh = () => ScrollTrigger.refresh();

    images.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", refresh, { once: true });
    });

    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      images.forEach((img) => img.removeEventListener("load", refresh));
      ctx.revert();
    };
  }, []);

  return null;
};

export default CaseStudiesAnimations;
