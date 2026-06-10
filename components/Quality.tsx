import { QUALITY_IMAGES } from "@/constants/Images";
import Image from "next/image";

const Quality = () => {
  return (
    <section id="quality" className="section-wrap flex flex-col">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-eyebrow">Quality</p>
        <h2 className="section-title mt-3">Quality That Lasts.</h2>
        <p className="section-lead mt-4 font-semibold text-foreground">
          20+ years delivering renewable projects, constructed to operate
          reliably over decades.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {QUALITY_IMAGES.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square wi overflow-hidden  "
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="section-body mt-8 space-y-4">
        <p>
          We are committed to providing the highest quality solar panels and
          services. Our products are rigorously tested to ensure they meet the
          highest standards of performance and durability.
        </p>
        <p className="font-semibold text-foreground">
          Long term performance is set during construction.
        </p>
        <p>Handover success is meaningless if assets fail later.</p>
        <p>
          Our construction methods and quality controls protect yield, reduce
          remediation risk and support efficient operation for the life of the
          asset.
        </p>
        <p className="font-semibold text-primary text-center">
          Engineered without compromise. Delivered without exception.
        </p>
      </div>
    </section>
  );
};

export default Quality;
