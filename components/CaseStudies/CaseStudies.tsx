import { CASE_STUDIES_IMAGES } from "@/constants/Images";
import Image from "next/image";
import CaseStudiesAnimations from "./CaseStudiesAnimations";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-wrap h-screen">
      <div className="mx-auto mb-8 max-w-3xl shrink-0 px-4 text-center">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title mt-3">Case Studies</h2>
        <p className="section-lead mt-3 sm:mt-4">
          Real utility-scale projects delivered on programme, across the UK and
          beyond.
        </p>
      </div>

      <div id="case-studies-stage" className="relative overflow-hidden">
        <div
          id="trackImgs"
          className="relative flex h-full w-max gap-4 sm:gap-5 sm:px-6 md:gap-6"
        >
          {CASE_STUDIES_IMAGES.map((image, index) => (
            <article
              key={`${index}-${image.src}`}
              className="group relative aspect-square h-[65vh] w-[65vh] shrink-0 overflow-hidden rounded-2xl border border-border/40  
              transition-all duration-500 hover:border-primary/30 sm:rounded-3xl "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-500 group-hover:from-black/90" />
              <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 group-hover:translate-y-0 sm:p-6 md:p-8">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.24em]">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug text-white sm:mt-2 sm:text-xl md:text-2xl">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CaseStudiesAnimations />
    </section>
  );
};

export default CaseStudies;
