import React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from './AdvancedBanner';
import "./parallax.css";

export default function Parallax() {
  return (
      <ParallaxProvider>
        <AdvancedBannerTop />
        <div className="center full">
          <h1 className="headline gray">You've just been hit by Smooth Parallax!</h1>
        </div>
      </ParallaxProvider>
  );
}
