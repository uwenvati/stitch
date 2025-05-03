import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PartnersAndPlatformSection from "../components/Enterprise/PartnersAndPlatformSection";
import PaymentFeaturesSection from "../components/Enterprise/PaymentFeaturesSection";
import EnterpriseHeroSection from "../components/Enterprise/EnterpriseHeroSection";

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
