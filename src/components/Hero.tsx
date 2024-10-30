"use client";

import { heroVideo, smallHeroVideo } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  // Define videoSrc as a string or null
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Use null as the initial value for ref

  // Set video source based on window width
  useEffect(() => {
    const handleVideoSrcSet = () => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    };

    handleVideoSrcSet(); // Set the initial video source
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    if (videoSrc && videoRef.current) { // Only run GSAP animations if videoSrc is set and ref is not null
      gsap.to(".hero-title", {
        opacity: 1,
        delay: 2,
      });
      gsap.to("#cta", {
        opacity: 1,
        y: -50,
        delay: 2,
      });

      gsap.to("#heroVideo", {
        scrollTrigger: {
          trigger: "#heroVideo",
          toggleActions: "play pause restart restart",
        },
        onComplete: () => {
          videoRef.current?.play();
        },
      });
    }
  }, [videoSrc]); // Add videoSrc to dependencies to ensure it only runs after videoSrc is set

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          {videoSrc && ( // Only render the video if videoSrc is set
            <video
              className="pointer-events-none"
              id="heroVideo"
              autoPlay
              muted
              preload="auto"
              playsInline
              key={videoSrc}
              ref={videoRef}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <Link href="#highlights" className="btn">Buy</Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
