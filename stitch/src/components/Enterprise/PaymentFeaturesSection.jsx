import React from "react";

const PaymentFeaturesSection = () => {
  // Feature data based on the images provided
  const features = [
    {
      title: "Accept online payments",
      description: "Offer any available payment methods in South Africa, with flexible integration options",
      linkText: "Explore online payments",
      image: "/images/online-payments-1.png",
    },
    {
      title: "Offer multiple recurring methods and enable automated fallbacks to never miss a payment",
      description: "",
      linkText: "Explore recurring payments",
      image: "/images/recurring-collections.png",
    },
    {
      title: "Send payouts, 24/7, 365",
      description: "Initiate instant and reliable refunds, withdrawals and disbursements – anytime, any day",
      linkText: "Explore payouts",
      image: "/images/payouts.avif",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start px-6 py-9 bg-[#161515fa] text-white">

      {/* Left Column - Scrollable content */}
      <div className="flex flex-col w-full md:w-1/2 space-y-12">

        {features.map((feature, index) => (
          <div key={index} className="flex flex-col space-y-4">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{feature.title}</h2>
            
            {feature.description && (
              <p className="text-gray-300 mb-6">{feature.description}</p>
            )}
            
            <a href="#" className="inline-flex items-center text-gray-300 hover:text-white mb-10">
              {feature.linkText}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <div className="mt-4 bg-black rounded-lg overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full object-contain max-w-md"
              />
            </div>
          </div>
        ))}
        
        
      </div>

      {/* Right Column - Sticky Image */}
      <div className="w-full md:w-1/2 h-screen sticky top-0 flex items-start justify-center">

        <div className="px-4 md:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Optimise in-person payments</h2>
          <p className="text-gray-300 mb-6">Accept reliable in-person payments at POS, including card present and alternative methods</p>
          
          <a href="#" className="inline-flex items-center text-gray-300 hover:text-white mb-10">
            Explore in-person payments
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <div className="mt-6">
            <img
              src="/images/in-person-payments-img.png"
              alt="Card payment at POS"
              className="w-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFeaturesSection;