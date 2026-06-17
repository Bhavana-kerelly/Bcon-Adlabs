import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configure local fonts
const saolDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/SaolDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SaolDisplay-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-saol",
});

const helno = localFont({
  src: "../../public/fonts/Helno-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-helno",
});

const helnoReg = localFont({
  src: "../../public/fonts/Helno-Reg.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-helno-reg",
});

export const metadata: Metadata = {
  title: "Best Advertisement & Digital Marketing Agency in Hyderabad | Bcon Adlabs",
  description: "Bcon Adlabs is a Google Partner and award-winning digital marketing agency in Hyderabad offering 360-degree branding, social media marketing, SEO, and website design solutions that help SMEs and startups grow online.",
  openGraph: {
    title: "Best Advertisement & Digital Marketing Agency in Hyderabad | Bcon Adlabs",
    description: "Bcon Adlabs is a Google Partner and award-winning digital marketing agency in Hyderabad offering 360-degree branding, social media marketing, SEO, and website design solutions that help SMEs and startups grow online.",
    images: ["/images/bcon-adlabs-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bcon Adlabs — Digital Marketing & Branding Agency, Hyderabad",
    description: "Bcon Adlabs helps businesses worldwide grow online with strategy-backed branding, social media, SEO & website design. #BconAdlabs #DigitalMarketing",
    images: ["/images/bcon-adlabs-logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saolDisplay.variable} ${helno.variable} ${helnoReg.variable} h-full scroll-smooth`}
    >
      <body className="background-color-beige h-full flex flex-col font-helno-reg">
        {children}
      </body>
    </html>
  );
}