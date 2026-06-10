"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitTitle = SplitText.create("#title", {
        type: "words",
        wordsClass: "hero-word",
      });
      const splitSubtitle = SplitText.create("#subtitle", {
        type: "lines",
        linesClass: "hero-line",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("#title-background", {
        scale: 0.2,
        duration: 1.1,
      })
        .from(
          splitTitle.words,
          {
            y: 20,
            opacity: 0,
            rotateX: 40,
            stagger: 0.08,
            duration: 0.9,
          },
          "-=0.35",
        )
        .from(
          splitSubtitle.lines,
          {
            y: 20,
            opacity: 0,
            rotateX: 40,
            stagger: 0.08,
            duration: 0.9,
          },
          "-=0.45",
        )
        .from(
          "#hero-eyebrow",
          {
            opacity: 0,
            y: -40,
            duration: 0.6,
          },
          "-=1",
        )
        .from(
          "#hero-content > div",
          {
            opacity: 0,
            y: -40,
            duration: 1,
          },
          "-=0.5",
        )
        .from(
          "#hero-stats > div",
          {
            opacity: 0,
            y: -40,
            stagger: 0.12,
            duration: 1,
          },
          "-=0.55",
        )
        .from(
          "#scroll-hint > div",
          {
            opacity: 0,
            y: -40,
            duration: 1,
          },
          "-=0.35",
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = document.querySelector("#hero") as HTMLElement | null;
    const heroVideo = document.querySelector(
      "#hero-video",
    ) as HTMLVideoElement | null;
    const heroOverlay = document.querySelector(
      "#hero-overlay",
    ) as HTMLElement | null;

    if (!hero || !heroVideo || !heroOverlay) return;

    const ctx = gsap.context(() => {
      const buildScrollTimeline = (config: {
        end: string;
        statsX: number;
        contentX: number;
        titleY: number;
        hintY: number;
      }) => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: config.end,
            scrub: 0.5,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        scrollTl
          .to(
            heroVideo,
            {
              currentTime: () =>
                Number.isFinite(heroVideo.duration)
                  ? heroVideo.duration - 0.1
                  : 0,
              ease: "none",
            },
            0,
          )
          .to(heroOverlay, { opacity: 0.35, ease: "none" }, 0)
          .to("#hero-stats", { x: config.statsX, opacity: 0, ease: "none" }, 0)
          .to(
            "#title-background",
            { y: config.titleY, opacity: 0, ease: "none" },
            0,
          )
          .to(
            "#hero-content",
            { x: config.contentX, opacity: 0, ease: "none" },
            0,
          )
          .to("#scroll-hint", { opacity: 0, y: config.hintY, ease: "none" }, 0);
      };

      const initScroll = () => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 767px)", () => {
          buildScrollTimeline({
            end: "+=280%",
            statsX: 48,
            contentX: -48,
            titleY: -72,
            hintY: 100,
          });
        });

        mm.add("(min-width: 768px)", () => {
          buildScrollTimeline({
            end: "+=500%",
            statsX: 140,
            contentX: -140,
            titleY: -100,
            hintY: 160,
          });
        });

        return () => mm.revert();
      };

      const notifyScrollReady = () => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      const cleanupMatchMedia = initScroll();

      const onMetadataLoaded = () => notifyScrollReady();

      if (heroVideo.readyState < 1) {
        heroVideo.addEventListener("loadedmetadata", onMetadataLoaded, {
          once: true,
        });
      }

      const pauseOnFirstFrame = () => heroVideo.pause();

      if (heroVideo.readyState >= 2) {
        pauseOnFirstFrame();
      } else {
        heroVideo.addEventListener("loadeddata", pauseOnFirstFrame, {
          once: true,
        });
      }

      window.addEventListener("load", notifyScrollReady);

      return () => {
        heroVideo.removeEventListener("loadedmetadata", onMetadataLoaded);
        heroVideo.removeEventListener("loadeddata", pauseOnFirstFrame);
        window.removeEventListener("load", notifyScrollReady);
        cleanupMatchMedia();
      };
    }, hero);

    return () => ctx.revert();
  }, []);

  return null;
};

export default HeroAnimations;
