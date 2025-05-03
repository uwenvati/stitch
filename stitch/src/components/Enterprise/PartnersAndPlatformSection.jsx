import React from 'react';

// Import logos properly from the assets folder
import BashLogo from "../../assets/icons/Bash.svg";
import BetwayLogo from "../../assets/icons/Betway-dark.svg";
import CellCLogo from "../../assets/icons/CellC.svg";
import CourierGuyLogo from "../../assets/icons/TheCourierGuy.png";
import EasyEquitiesLogo from "../../assets/icons/EasyEquities-dark.svg";
import HollywoodBetsLogo from "../../assets/icons/Hollywoodbets.svg";
import LunoLogo from "../../assets/icons/Luno.svg";
import MrDLogo from "../../assets/icons/MrD-dark.svg";
import MTNLogo from "../../assets/icons/MTN.svg";
import ShyftLogo from "../../assets/icons/Shyft-reverse.svg";
import TakealotLogo from "../../assets/icons/Takealot-dark.svg";
import VodacomLogo from "../../assets/icons/Vodacom.svg";

const PartnersAndPlatformSection = () => {
  const partners = [
    { name: 'Bash', logo: BashLogo },
    { name: 'Betway', logo: BetwayLogo },
    { name: 'Cell C', logo: CellCLogo },
    { name: 'The Courier Guy', logo: CourierGuyLogo },
    { name: 'EasyEquities', logo: EasyEquitiesLogo },
    { name: 'Hollywood Bets', logo: HollywoodBetsLogo },
    { name: 'Luno', logo: LunoLogo },
    { name: 'MrD', logo: MrDLogo },
    { name: 'MTN', logo: MTNLogo },
    { name: 'Shyft', logo: ShyftLogo },
    { name: 'Takealot', logo: TakealotLogo },
    { name: 'Vodacom', logo: VodacomLogo },
  ];

  return (
    <div>
      
      <div className="bg-[#0a0a0a] text-white ">
        <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center items-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div className="bg-[#161515fa] text-white">
        <div className="container mx-auto py-16 px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row lg:space-x-24">
            {/* Heading */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                One platform to collect, streamline and manage payments
              </h2>
            </div>

            {/* Description */}
            <div className="lg:w-1/2">
              <p className="text-lg mb-12">
                Increase payment success rates, reduce costs and streamline financial operations through a single platform. 
                Use Stitch for online payments, in-person payments, recurring collections and financial management — with 
                seamless reconciliation and reporting, built-in redundancies for payments optimisation and automated 
                fraud prevention.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300">
                CONTACT SALES
              </button>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default PartnersAndPlatformSection;
