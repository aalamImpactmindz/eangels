import "./header.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ButtonAnimated from "../button-animated/ButtonAnimated";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container container-small">
        <div className="hdr-wrap flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={171}
              height={98}
              loading="eager"
            />
          </Link>
          <Link href="https://cal.com/adrian-schraud/potentialanalyse">
            <ButtonAnimated />
          </Link>
        </div>
        <div className="hdr-border mt-5"></div>
      </div>
    </header>
  );
};

export default Header;
