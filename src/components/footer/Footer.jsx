import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container container-small">
        <div className="p-5 rounded-3xl bg-color-tertiary">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <div className="rounded-2xl bg-stone-700 p-5 flex flex-col gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-color-primary text-2xl"
                />
                <Link href="mailto:support@eangels.de" className="link-main">
                  support@eangels.de
                </Link>
              </div>
              <div className="rounded-2xl bg-stone-700 p-5 flex flex-col gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-color-primary text-2xl"
                />
                <Link href="tel:+4915679036900" className="link-main">
                  +49 15679 036900
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 ps-50">
              <div className="text-lg font-bold text-color-primary">Menu</div>
              <Link href="/" className="link-main">
                Startseite
              </Link>
              <Link href="/preise" className="link-main">
                Preise
              </Link>
              <Link href="/impressum" className="link-main">
                Impressum
              </Link>
              <Link href="/datenschutz" className="link-main">
                Datenschutz
              </Link>
              <Link href="/agb" className="link-main">
                AGB
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-stone-700 text-center pt-4">
          <p>&copy;eAngels UG 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
