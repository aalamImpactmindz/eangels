"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const PagePreiseClient = () => {
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
      <section className="section-preise section-padding">
        <div className="container container-extra-small">
          <div className="preise-wrap">
            <div className="text-4xl font-bold animated-heading mb-10 text-center">
              Support / Einrichtungen / Schulung
            </div>
            <div className="rounded-3xl bg-color-tertiary" data-aos="fade-up">
              <div className="p-4 flex justify-end border-b border-color-primary">
                <span className="font-bold width-200 ps-4 shrink-0">Stundensatz</span>
              </div>
              <div className="p-4 flex justify-between">
                <div className="grow">
                  <div className="font-bold">Support / Consulting - Senior</div>
                  <p className="text-sm opacity-90">
                    Standardeinrichtung, Prozessoptimierung,
                    Schnittstelleneinrichtung
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">
                  150,00 € *<br />
                  (ab 100,00 € möglich)
                </div>
              </div>
              <div className="p-4 pt-0 flex justify-between">
                <div className="grow">
                  <div className="font-bold">
                    Support / Consulting - Premium
                  </div>
                  <p className="text-sm opacity-90">
                    Individuelle Prozessberatung, Speziallösungen
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">
                  200,00 € *<br />
                  (ab 150,00 € möglich)
                </div>
              </div>
            </div>
          </div>
          <div className="preise-wrap mt-10">
            <div className="text-4xl font-bold animated-heading mb-10 text-center">
              Entwicklung / Programmierung
            </div>
            <div className="rounded-3xl bg-color-tertiary" data-aos="fade-up">
              {/* <div className="p-4 flex justify-end border-b border-color-primary">
                <span className="font-bold width-200 ps-4 shrink-0">Hourly rate</span>
              </div> */}
              <div className="p-4 flex justify-between">
                <div className="grow">
                  <div className="font-bold">Entwicklung (Senior)</div>
                  <p className="text-sm opacity-90">
                    Standardentwicklungsaufgaben, Bestehende Prozesse abändern
                    und individualisieren
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">
                  150,00 € *<br />
                  (ab 100,00 € möglich)
                </div>
              </div>
              <div className="p-4 pt-0 flex justify-between">
                <div className="grow">
                  <div className="font-bold">Entwicklung (Premium)</div>
                  <p className="text-sm opacity-90">
                    Maßgeschneiderte Softwarelösungen, Entwicklung neuer
                    Prozesse
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">
                  200,00 € *<br />
                  (ab 150,00 € möglich)
                </div>
              </div>
              <div className="p-4 pt-0 flex justify-between">
                <div className="grow">
                  <div className="font-bold">Business Development</div>
                  <p className="text-sm opacity-90">
                    Von der Strategie bis zur Umsetzung - wir entwickeln
                    Wachstum
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">
                  250,00 €<br />
                  (ab 200,00 € möglich)
                </div>
              </div>
            </div>
          </div>
          <div className="preise-wrap mt-10">
            <div className="text-4xl font-bold animated-heading mb-10 text-center">
              AI & Tricoma AI Schulung
            </div>
            <div className="rounded-3xl bg-color-tertiary" data-aos="fade-up">
              <div className="p-4 flex justify-end border-b border-color-primary">
                <span className="font-bold width-200 ps-4 shrink-0">Stundensatz</span>
              </div>
              <div className="p-4 flex justify-between">
                <div className="grow">
                  <div className="font-bold">Support / Consulting - AI</div>
                  <p className="text-sm opacity-90">
                    Beratung und Implementierung von KI-Lösungen
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">249,00 € *</div>
              </div>
            </div>
          </div>
          <div className="preise-wrap mt-10">
            <div className="text-4xl font-bold animated-heading mb-10 text-center">
              Tagessätze
            </div>
            <div className="rounded-3xl bg-color-tertiary" data-aos="fade-up">
              <div className="p-4 flex justify-end border-b border-color-primary">
                <span className="font-bold width-200 ps-4 shrink-0">Pauschale</span>
              </div>
              <div className="p-4 flex justify-between">
                <div className="grow">
                  <div className="font-bold">Support / Consulting</div>
                  <p className="text-sm opacity-90">
                    Tagessatz für 8h Vorort-Termin beim Kunden, zzgl. Spesen
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">1499,00 € *</div>
              </div>
              <div className="p-4 pt-0 flex justify-between">
                <div className="grow">
                  <div className="font-bold">
                    Support / Consulting - AI Beratung
                  </div>
                  <p className="text-sm opacity-90">
                    Tagessatz für 8h Vorort-Termin beim Kunden, zzgl. Spesen
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">1999,00 € *</div>
              </div>
            </div>
          </div>
          <div className="preise-wrap mt-10">
            <div className="text-4xl font-bold animated-heading mb-10 text-center">
              RundUmDieUhr Support
            </div>
            <div className="rounded-3xl bg-color-tertiary" data-aos="fade-up">
              <div className="p-4 flex justify-end border-b border-color-primary">
                <span className="font-bold width-200 ps-4 shrink-0">Stundensatz</span>
              </div>
              <div className="p-4 flex justify-between">
                <div className="grow">
                  <div className="font-bold">Außerhalb der Geschäftszeiten</div>
                  <p className="text-sm opacity-90">
                    Diese sind von Mo-Do 08:00-17:00 Uhr und Fr 08:00-13:00
                  </p>
                  <p className="text-sm opacity-90">
                    Diese Support-Stufe gilt für vereinbarte Termine, welche
                    außerhalb unserer Geschäftszeiten gelegt werden
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">100%</div>
              </div>
              <div className="p-4 pt-0 flex justify-between">
                <div className="grow">
                  <div className="font-bold">
                    Zuschlag Notfall (Anfragekosten 199€ + Stundensatz)
                  </div>
                  <p className="text-sm opacity-90">
                    Innerhalb und außerhalb der Geschäftszeiten
                  </p>
                </div>
                <div className="width-200 ps-4 shrink-0 text-sm">100%</div>
              </div>
            </div>
          </div>
          <div className="preise-wrap mt-10">
            <div className="rounded-3xl bg-color-tertiary" data-aos="fade-up">
              <div className="p-4 border-b border-color-primary font-bold">
                * Preis zzgl. 19% Mehrwertsteuer
              </div>
              <div className="p-4 flex justify-between">
                <p className="text-sm opacity-90">
                  Mit der Veröffentlichung dieser Preisliste verlieren alle
                  vorhergehenden Preislisten ihre Gültigkeit. Wir schließen die
                  Haftung für Irrtümer oder technische Irrtümer hiermit aus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PagePreiseClient;
