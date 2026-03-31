import ServicesHero from "../components/ServicesHero";
import ServiceCards from "../components/ServiceCards";
import FeaturedService from "../components/FeaturedService";
import ServiceProcess from "../components/ServiceProcess";
import ServiceCTA from "../components/ServiceCTA";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <div className="bg-white">
        <ServiceCards />
        <FeaturedService />
        <ServiceProcess />
        <ServiceCTA />
      </div>
    </>
  );
};

export default Services;
