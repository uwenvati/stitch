import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EnterpriseHeroSection from "../components/Enterprise/enterpriseherosection";
import PartnersAndPlatformSection from "../components/Enterprise/PartnersAndPlatformSection";

function EnterpriseLayout() {
  return (
    <>
      <Navbar />
      {/* Insert Enterprise specific components here */}
      <EnterpriseHeroSection/>
      <PartnersAndPlatformSection/>
      <Footer />
    </>
  );
}

export default EnterpriseLayout;
