import React from "react";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingFeatures from "./LandingFeatures";
import LandingContact from "./LandingContact";
import LandingBanner from "./LandingBanner";
import LandingPricing from "./LandingPricing";
import LandingFooter from "./LandingFooter";
import {Spacer} from "@nextui-org/spacer";
const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <LandingBanner />
      <LandingPricing />
      <LandingContact />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
