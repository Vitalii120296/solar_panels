"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageItem = {
  src: string;
  alt: string;
  code: string;
};

const HoverExpand = ({
  images,
  className,
}: {
  images: ImageItem[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (isMobile) {
    return (
      <div className={cn("w-full", className)}>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, index) => (
            <div
              key={image.code ?? index}
              className="relative h-56 w-[78vw] shrink-0 snap-center overflow-hidden rounded-2xl sm:h-64 sm:w-[60vw]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="80vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-6xl px-2 sm:px-4", className)}>
      <div className="flex w-full items-center justify-center gap-2 md:gap-3">
        {images.map((image, index) => {
          const isActive = activeImage === index;

          return (
            <motion.div
              key={image.code ?? index}
              className="relative h-72 cursor-pointer overflow-hidden rounded-2xl md:h-96 md:rounded-3xl"
              style={{ flex: isActive ? 5 : 1 }}
              animate={{
                flex: isActive ? 5 : 1,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />

              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover will-change-transform"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HoverExpand;
