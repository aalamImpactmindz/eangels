"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonMain from "@/components/button-main/ButtonMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBullseye,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText, ScrambleTextPlugin } from "gsap/all";

const PageHomeClient = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

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

    // Animated Text
    const texts = gsap.utils.toArray(".animated-text");

    texts.forEach((text) => {
      const delay = (text.dataset.animationDelay || 0) / 1000; // convert ms → seconds

      const split = new SplitText(text, {
        type: "lines",
        linesClass: "lineChild",
      });

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("lineParent");

        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.from(split.lines, {
        yPercent: 100,
        duration: 0.5,
        delay: delay,
        stagger: 0.1,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          once: true,
        },
      });
    });

    // Stats animation
    gsap.utils.toArray(".stat-container").forEach((el) => {
      gsap.to(el, {
        marginInline: -15,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
      });
    });

    // Scramble text
    gsap.utils.toArray(".scramble-text").forEach((el) => {
      gsap.to(el, {
        duration: 1,
        scrambleText: {
          text: el.textContent,
          chars: "upperCase",
          revealDelay: 0.5,
          speed: 0.3,
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Scale section
    gsap.utils.toArray(".scale-section").forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.6 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "top 30%",
            scrub: true,
          },
        },
      );
    });
  });
  return (
    <>
      <section className="section-hero-home py-6" id="hero-home">
        <div className="container container-big">
          <div className="ps-10 py-17 border rounded-3xl flex justify-between overflow-hidden items-center bg-color-tertiary border-color-primary">
            <div className="shh-text">
              <h1 className="text-7xl font-bold animated-heading">
                Deine <span className="text-color-primary">tricoma</span>{" "}
                Experten
              </h1>
              <p className="mt-4 animated-text">
                Als zertifizierter Gold-Service-Partner von tricoma sind wir
                darauf spezialisiert, dein ERP-System exakt nach deinen
                individuellen Anforderungen einzurichten, zu optimieren und
                weiterzuentwickeln. Unser Ansatz kombiniert eine sorgfältige
                Bedarfsanalyse mit systematisierten Einrichtungsprozessen, um
                genau das zu liefern, was dein Unternehmen benötigt.
              </p>
              <Link
                href="https://cal.com/adrian-schraud/potentialanalyse"
                target="_blank"
                data-aos="fade-in"
                data-aos-delay="600"
              >
                <ButtonMain
                  buttonText="Kennenlerngespräch vereinbaren"
                  customClass="w-full mt-6 mb-10"
                />
              </Link>
            </div>
            <div className="shh-image">
              <Image
                src="/images/gold-partner.svg"
                alt=""
                width={644}
                height={727}
                className="relative"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-stats pt-10">
        <div className="container container-big">
          <div className="ss-wrap flex justify-center">
            <div className="stat-container rounded-full inline-flex flex-col items-center justify-center text-center px-6 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="opacity-80">Gesammelte Jahre Erfahrung</p>
            </div>
            <div className="stat-container rounded-full inline-flex flex-col items-center justify-center text-center px-6 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">75+</div>
              <p className="opacity-80">
                tricoma Systeme eingerichtet von 0 auf 100%
              </p>
            </div>
            <div className="stat-container rounded-full inline-flex flex-col items-center justify-center text-center px-6 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="opacity-80">individual Entwicklungen</p>
            </div>
            <div className="stat-container rounded-full inline-flex flex-col items-center justify-center text-center px-6 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="opacity-80">Betreute Kunden</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-specs section-padding">
        <div className="container container-small">
          <Image
            src="/images/dashboard.png"
            alt=""
            width={3024}
            height={1716}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            className="rounded-2xl"
          />
        </div>
        <div className="container container-medium text-center">
          <div className="grid grid-cols-3 gap-5 mt-15">
            <div
              className="spec-container rounded-3xl bg-color-dark py-5 px-8 border border-neutral-800"
              data-aos="fade-up"
            >
              <FontAwesomeIcon
                icon={faRocket}
                className="text-4xl text-color-primary border rounded-2xl p-3 mb-4"
              />
              <div className="text-2xl font-bold mb-3">
                Nicht durch endlose Tutorials suchen
              </div>
              <p className="opacity-80">
                Du kennst dein Unternehmen, wir kennen tricoma. Gemeinsam
                digitalisieren & automatisieren wir deine Prozesse.
              </p>
            </div>
            <div
              className="spec-container rounded-3xl bg-color-dark py-5 px-8 border border-neutral-800"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-4xl text-color-primary border rounded-2xl p-3 mb-4"
              />
              <div className="text-2xl font-bold mb-3">
                Direkte und präzise Antworten
              </div>
              <p className="opacity-80">
                Immer die passende Lösung parat. In 30+ Jahren Tricoma Erfahrung
                haben wir jedes Problem schon einmal gelöst.
              </p>
            </div>
            <div
              className="spec-container rounded-3xl bg-color-dark py-5 px-8 border border-neutral-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                className="text-4xl text-color-primary border rounded-2xl p-3 mb-4"
              />
              <div className="text-2xl font-bold mb-3">
                Prozesse planbar optimieren
              </div>
              <p className="opacity-80">
                Wir kennen die Hebel, die dein Unternehmen voranbringen. Schon
                vorab ist dir klar, welche Verbesserungen folgen.
              </p>
            </div>
          </div>
          <Link
            href="https://cal.com/adrian-schraud/potentialanalyse"
            target="_blank"
          >
            <ButtonMain
              buttonText="Kennenlerngespräch vereinbaren"
              customClass="mt-10"
            />
          </Link>
        </div>
      </section>
      <section className="section-mastermind">
        <div className="container container-medium">
          <div className="section-heading flex items-start gap-5">
            <div className="px-4 py-2 text-color-primary rounded-full bg-neutral-800 font-bold text-sm mt-1">
              TRICOMA EXPERTE
            </div>
            <div className="text-5xl font-bold animated-heading">
              Der Kopf hinter den eAngels
            </div>
          </div>
          <div
            className="text-3xl mt-10 mb-15 font-light animated-text"
            data-animation-delay="200"
          >
            <span className="opacity-60">
              Während andere noch experimentieren, nutzen du und dein
              Unternehmen
            </span>{" "}
            <b className="font-bold">
              das Wissen eines ehemaligen tricoma-Entwicklers
            </b>
          </div>
        </div>
        <div className="container container-small">
          <div className="grid grid-cols-2 gap-10">
            <div className="sm-left flex justify-end">
              <div className="mastermind-image rounded-t-full pt-10 pb-5 relative">
                <Image
                  src="/images/adrian-schraud.png"
                  alt=""
                  width={400}
                  height={400}
                />
                <div className="text-6xl font-bold absolute bottom-0 left-0">
                  <span className="text-color-primary scramble-text">
                    ADRIAN
                  </span>{" "}
                  <span className="scramble-text">SCHRAUD</span>
                </div>
              </div>
            </div>
            <div className="sm-right">
              <p className="mb-6 leading-7">
                Als ich 2012 bei tricoma angefangen habe, steckte die Software
                noch ziemlich in den Kinderschuhen. In den 5 Jahren die ich dort
                verbracht habe konnte ich in der Entwicklung und als Leiter des
                Kundensupport das Systemm von grunddauf mitgestallten und die
                Basis für die heutige Version legen.
              </p>
              <p className="mb-6 leading-7">
                In der engen Zusammenarbeit mit Kunden habe ich schnell gemerkt,
                dass jedes Unternehmen andere Bedürfnisse hat. Aus dieser
                Erkenntnis und meiner Leidenschaft für maßgeschneiderte Lösungen
                und persönliche Betreuung entstand 2017 die Idee zur Gründung
                der eAngels, um den steigenden Bedarf der tricoma Nutzer noch
                besser zu erfüllen.
              </p>
              <p className="mb-6 leading-7">
                Natürlich bin ich tricoma immer verbunden geblieben und man
                sieht mich weiterhin unteranderem als Redner auf Events, noch in
                Erklärvideos für bestimmte Module oder auch als Autor
                vereinzelter Tutorials.
              </p>
              <div className="sm-tags flex flex-wrap gap-2">
                <div className="px-4 py-2 rounded-full bg-neutral-800 font-bold text-sm mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="me-3 text-color-primary text-xl"
                  />
                  12 Jahre Tricoma Erfahrung
                </div>
                <div className="px-4 py-3 rounded-full bg-neutral-800 font-bold text-sm mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="me-3 text-color-primary text-xl"
                  />
                  Software Entwickler
                </div>
                <div className="px-4 py-3 rounded-full bg-neutral-800 font-bold text-sm mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="me-3 text-color-primary text-xl"
                  />
                  Tricoma mitgestaltet
                </div>
                <div className="px-4 py-3 rounded-full bg-neutral-800 font-bold text-sm mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="me-3 text-color-primary text-xl"
                  />
                  Tutorial Autor
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-15">
            <Link
              href="https://cal.com/adrian-schraud/potentialanalyse"
              target="_blank"
            >
              <ButtonMain buttonText="Kennenlerngespräch vereinbaren" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-challenges section-padding">
        <div className="container container-small">
          <div className="grid grid-cols-2 gap-15 items-center">
            <div className="sc-text">
              <div className="text-3xl mb-3 font-semibold">
                Du hast dich für tricoma entschieden, kannst aber garnicht das
                volle Potential aus deiner Firma und der Software ausschöpfen
              </div>
              <p className="opacity-80">
                Als Unternehmer musst du keine Software einrichten können,
                sondern Sie nutzen um dein Unternehmen voran zutreiben.
              </p>
            </div>
            <div
              className="sc-image flex justify-center"
              data-scroll
              data-scroll-speed="0.05"
            >
              <Image
                src="/images/process-flow.png"
                alt=""
                width={918}
                height={554}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-15 mt-30 items-center">
            <div
              className="sc-image flex justify-center"
              data-scroll
              data-scroll-speed="0.05"
            >
              <Image
                src="/images/df5xc.png"
                alt=""
                width={500}
                height={336}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="sc-text">
              <div className="text-3xl mb-3 font-semibold">
                Die vielen verschiedenen Einstellungsmöglichkeiten und Tools die
                tricoma dir bietet überfordern dich und du weißt garnicht was
                für dich der beste Weg ist?
              </div>
              <p className="opacity-80">
                Tutorials helfen dir dabei auch nicht. Um deine Prozesse
                strukturiert zu automatisieren, benötigst du zielorientierte
                Beratung
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-15 mt-30 items-center">
            <div className="sc-text">
              <div className="text-3xl mb-3 font-semibold">
                Du hast Prozesse geschaffen, weil sie so entstanden sind. Diese
                hast du aber noch nie gezielt von außen betrachtet und Stück für
                Stück optimiert?
              </div>
              <p className="opacity-80">
                Ohne sich täglich mit Prozessoptimierungen zu befassen ist das
                auch nicht ohne weiteres möglich.
              </p>
            </div>
            <div
              className="sc-image flex justify-center"
              data-scroll
              data-scroll-speed="0.05"
            >
              <Image
                src="/images/jz421a.png"
                alt=""
                width={420}
                height={365}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-partner pb-25">
        <div className="container container-big">
          <div className="heading-container flex flex-col items-center gap-2">
            <div className="px-4 py-2 text-color-primary rounded-full bg-neutral-800 font-bold text-sm mb-3 uppercase">
              Dein zuverlässiger Partner
            </div>
            <div className="text-5xl font-bold animated-heading">
              Unser Angebot - Deine Vorteile
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-15">
            <div
              className="rounded-3xl p-5 pb-30 bg-color-tertiary"
              data-aos="fade-up"
            >
              <div className="text-2xl font-bold mb-3">
                Alles aus einer Hand
              </div>
              <p className="opacity-80">
                Wir möchten dir maßgeschneiderte Lösungen bieten, die perfekt
                auf dein Unternehmen abgestimmt sind. Durch eine präzise Analyse
                deiner spezifischen Bedürfnisse stimmen wir das tricoma-System
                optimal auf dich ab.
              </p>
            </div>
            <div
              className="rounded-3xl p-5 pb-30 bg-color-tertiary"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-2xl font-bold mb-3">
                Effiziente Umsetzung
              </div>
              <p className="opacity-80">
                Als erfahrener Gold-Service-Partner sorgen wir für ein optimales
                Kundenerlebnis. Dank unserer umfangreichen Erfahrung ist die
                Systemintegration mit uns einfach und effektiv. Wir schätzen
                deine Zeit und setzen auf eine schnelle Implementierung des
                Systems
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-4 gap-5 mt-5"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <div className="rounded-3xl bg-color-dark py-5 px-8 border border-neutral-800 text-center">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-4xl text-color-primary border rounded-2xl p-3 mb-4"
              />
              <p className="opacity-80">
                Wir analysieren deine Bedürfnisse, um das tricoma-System optimal
                anzupassen
              </p>
            </div>
            <div className="rounded-3xl bg-color-dark py-5 px-8 border border-neutral-800 text-center">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-4xl text-color-primary border rounded-2xl p-3 mb-4"
              />
              <p className="opacity-80">
                Wir kombinieren individuelle Anforderungen mit gezielten
                Prozessen
              </p>
            </div>
            <div className="rounded-3xl bg-color-dark py-5 px-8 border border-neutral-800 text-center">
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                className="text-4xl text-color-primary border rounded-2xl p-3 mb-4"
              />
              <p className="opacity-80">
                Als Gold-Service-Partner bieten wir den besten Service und die
                höchste Expertise
              </p>
            </div>
            <div className="rounded-3xl bg-color-dark py-5 px-8 border border-neutral-800 text-center">
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                className="text-4xl text-color-primary border rounded-2xl p-3 mb-4"
              />
              <p className="opacity-80">
                Unsere Erfahrung ist der Schlüssel zu unserer Geschwindigkeit
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="https://cal.com/adrian-schraud/potentialanalyse"
              target="_blank"
            >
              <ButtonMain buttonText="Kennenlerngespräch vereinbaren" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHomeClient;
