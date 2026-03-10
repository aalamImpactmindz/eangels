"use client";
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import AOS from "aos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname } from "next/navigation";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function PageWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true,
    });
  }, []);

  useGSAP(() => {
    // console.log(ScrollTrigger.isTouch);

    // Locomotive scroll instance
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        duration: 1.2,
        wheelMultiplier: 1,
        smoothWheel: true,
      },
    });

    // Synchronize Lenis scrolling with ScrollTrigger
    locomotiveScroll.lenisInstance.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    // Page scroll to top
    locomotiveScroll.scrollTo(0, {
      // immediate: true,
    });

    // Cleanup
    return () => {
      locomotiveScroll.destroy();
    };
  }, [pathname]);

  return (
    <div className="page-wrapper position-relative z-1">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
