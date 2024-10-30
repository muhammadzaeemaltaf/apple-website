"use client";

import { useState, useEffect } from "react";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import HowItWork from "@/components/HowItWork";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Loader from "./loading"; // Import your Loader component

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-black">
      {isLoading ? (
        <Loader /> // Show Loader component while loading
      ) : (
        <>
          <Navbar />
          <Hero />
          <Highlights />
          <Model />
          <Features />
          <HowItWork />
          <Footer />
        </>
      )}
    </main>
  );
}
