"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";

const PageImpressumClient = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Animated Headings
    const headings = gsap.utils.toArray(".animated-heading");
    headings.forEach((heading) => {
      const split = new SplitText(heading, { type: "words,chars" });
      const chars = split.chars;

      gsap.from(chars, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 150,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          once: true,
        },
      });
    });
  });
  return (
    <>
      <section className="section-impressum section-padding">
        <div className="container container-extra-small">
          <div className="text-5xl font-bold animated-heading mb-20">
            Impressum
          </div>
          <p className="text-2xl opacity-90">eAngels UG (haftungsbeschränkt)</p>
          <p className="text-2xl opacity-90">
            diese vertr. d. d. Geschäftsführer Adrian Schraud
          </p>
          <p className="text-2xl opacity-90">Kirchbergstraße 2a</p>
          <p className="text-2xl opacity-90">97262 Hausen b. Würzburg</p>
          <p className="text-2xl opacity-90">Deutschland</p>
          <p className="text-2xl opacity-90">
            Telefon:{" "}
            <Link href="tel:+4915679036900" className="text-color-primary">
              +49 15679 036900
            </Link>
          </p>
          <p className="text-2xl opacity-90">
            E-Mail:{" "}
            <Link href="mailto:info@eAngels.de" className="text-color-primary">
              info@eAngels.de
            </Link>
          </p>
          <p className="text-2xl opacity-90">USt-IdNr.: DE347982543</p>
          <p className="text-2xl opacity-90">Steuernummer: 257/125/00134</p>
          <p className="text-2xl opacity-90">
            Handelsregister HRB 15817, Würzburg
          </p>
          <div className="font-bold text-2xl mt-8">
            Gesetzliche Anbieterkennung:
          </div>
          <p className="text-2xl opacity-90">Alternative Streitbeilegung:</p>
          <p className="text-2xl opacity-90">
            Die Europäische Kommission stellt eine Plattform für die
            außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit,
            aufrufbar unter
          </p>
          <Link
            href="https://ec.europa.eu/odr"
            className="text-2xl opacity-90 text-color-primary"
          >
            https://ec.europa.eu/odr.
          </Link>
        </div>
      </section>
    </>
  );
};

export default PageImpressumClient;
