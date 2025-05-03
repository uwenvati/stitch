import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EnterpriseHeroSection from "../components/Enterprise/enterpriseherosection";
import PartnersAndPlatformSection from "../components/Enterprise/PartnersAndPlatformSection";
import PaymentFeaturesSection from "../components/Enterprise/PaymentFeaturesSection";

function EnterpriseLayout() {
  return (
    <>
      <Navbar />
      {/* Insert Enterprise specific components here */}
      <EnterpriseHeroSection/>
      <PartnersAndPlatformSection/>
      <PaymentFeaturesSection/>
      <Footer />
    </>
  );
}

export default EnterpriseLayout;
