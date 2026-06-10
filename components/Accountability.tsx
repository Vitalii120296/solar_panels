import HoverExpand from "./ui/hoverExpand";
import { HOVER_EXPAND_IMAGES } from "@/constants/Images";

function Accountability() {
  return (
    <section
      id="accountability"
      className="section-wrap flex flex-col text-foreground w-full"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="section-eyebrow">Accountability</p>
        <h2 className="section-title mt-3">
          One Accountable Delivery Partner Beats Five Subcontractors.
        </h2>
        <p className="section-lead mt-4">
          Fewer interfaces. Clear responsibility. Predictable outcomes.
        </p>
        <div className="section-body mt-6 space-y-4 sm:mt-8">
          <p className="font-semibold text-foreground">
            Over 1.2GW of renewables installed nationwide through directly
            managed teams.
          </p>
          <p className="font-semibold text-foreground">
            Fragmented subcontracting drives delays and additional costs.
          </p>
          <p>
            We self deliver site set up, civils, mechanical and electrical
            scopes to maintain single point accountability, giving our clients
            control over outcomes—not excuses.
          </p>
        </div>
      </div>

      <div className="mt-6 flex w-full items-center justify-center overflow-hidden py-2 sm:mt-8 sm:py-4">
        <HoverExpand images={HOVER_EXPAND_IMAGES} />
      </div>

      <p className="section-body mx-auto mt-6 max-w-3xl text-center font-semibold text-foreground sm:mt-8">
        Total ownership – from first design to final performance.
      </p>
    </section>
  );
}

export default Accountability;
