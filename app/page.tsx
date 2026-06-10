import Accountability from "@/components/Accountability";
import Hero from "@/components/Hero/Hero";
import Quadlity from "@/components/Quality";
import Health from "@/components/Health";
import OperationAndMaintenance from "@/components/OperationAndMaintenance";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        id="content"
        className="mx-auto transition-colors duration-300 overflow-x-hidden ease-in 
        border-t-5 border-l-5 border-r-5 border-transparent relative max-w-7xl rounded-t-3xl bg-background/45 
        shadow-[0_-32px_64px_rgba(0,0,0,0.12)] "
      >
        <div className="absolute -z-10 inset-0 backdrop-blur-md pointer-events-none" />
        <Accountability />
        <Quadlity />
        <Health />
        <OperationAndMaintenance />
        <Testimonials />
        <CaseStudies />
        <Blog />
      </div>
    </>
  );
}
