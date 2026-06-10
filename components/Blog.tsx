import Image from "next/image";

const Blog = () => {
  return (
    <section id="blog" className="section-wrap flex flex-col gap-6 sm:gap-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center sm:gap-4">
        <p className="section-eyebrow">Blog</p>
        <h2 className="section-title">
          Constructability: A View from the Field
        </h2>
        <p className="text-base font-semibold text-muted-foreground sm:text-lg">
          3 February 2026
        </p>
      </div>

      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-border/60 shadow-md sm:aspect-[16/9] sm:rounded-2xl md:h-[50vh] md:max-h-[520px] md:aspect-auto">
        <Image
          src="/images/blog/Holcim_CaseStudy_CraysHallsSolarFarm_Billericay_Essex_Oct2025_0059-Large.webp"
          alt="Solar farm case study"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      <div className="section-body mx-auto flex max-w-3xl flex-col gap-4 sm:gap-5">
        <p>
          Hello and welcome to Robinson and Lawlor&apos;s first blog post.
          I&apos;m Pete, Chief Estimator and Designer, and this marks the start
          of a monthly series I&apos;ll be sharing called
          &ldquo;Constructability: A View from the Field.&rdquo; It&apos;s not
          theory, and it&apos;s not sales talk, it&apos;s what actually happens
          on site and how to get it right.
        </p>
        <p>
          Across 20+ years in renewables and 15+ years delivering utility scale
          solar, we&apos;ve seen the same issues crop up time and time again.
          Projects slipping on programme, budgets creeping, quality being
          compromised, and sites becoming harder to manage than they ever needed
          to be.
        </p>
        <p>
          We&apos;ll be covering the full lifecycle of a project, from early
          stage design through to snagging, commissioning, and DNO energisation.
        </p>
        <p>
          If your projects are running over budget, missing programme dates, or
          falling short on quality, you&apos;re not alone — and more
          importantly, it&apos;s fixable.
        </p>
        <p>
          The first full article lands in May. In the meantime, if any of this
          resonates, we&apos;d welcome your thoughts, because the best run sites
          are built on shared experience.
        </p>
      </div>
    </section>
  );
};

export default Blog;
