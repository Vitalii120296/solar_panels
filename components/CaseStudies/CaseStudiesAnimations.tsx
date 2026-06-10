"use client";

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesAnimations = () => {
  useEffect(() => {
    const track = document.querySelector("#trackImgs");
    const section = document.querySelector("#case-studies");
    // const stage = document.querySelector("#case-studies-stage");

    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - section.clientWidth;

      console.log(getDistance(), "distance");

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + getDistance(),
          scrub: 1.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
};

export default CaseStudiesAnimations;
