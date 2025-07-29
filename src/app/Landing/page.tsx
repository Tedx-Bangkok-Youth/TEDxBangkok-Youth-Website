import React from "react";
import HeroSection from "./Components/HeroSection";
import SliderSection from "./Components/SliderSection";
import MakeItYouSection from "./Components/MakeItYouSection";
import TimelineSection from "./Components/TimelineSection";
import MapSection from "./Components/MapSection";
import StorySection from "./Components/StorySection";

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <HeroSection />
      <SliderSection />
      <MakeItYouSection />
      <TimelineSection />
      <MapSection />
      <StorySection />
    </div>
  );
}

export default Landing;
