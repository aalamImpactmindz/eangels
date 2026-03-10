import { Outfit, DM_Sans } from "next/font/google";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "aos/dist/aos.css";
import "./globals.css";
import PageWrapper from "@/components/page-wrapper/PageWrapper";

const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fontDmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontOutfit.variable} ${fontDmSans.variable}`}>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
