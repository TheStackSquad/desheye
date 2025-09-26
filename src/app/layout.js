//src/app/layout.js

import {
  Cinzel_Decorative,
  Prata,
  Playfair_Display,
  Outfit,
  Abril_Fatface,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/nav/Header";

// Configure Cinzel Decorative font with variable name
const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

// Configure Prata font with variable name
const prata = Prata({
  variable: "--font-prata",
  weight: "400", // Prata only has a single weight
  subsets: ["latin"],
  display: "swap",
});

// New blog-specific Google Fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
});

const abril = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  // This is the new property that resolves the warning
  metadataBase: new URL("https://desheye.vercel.app/"),
  title: "Desheye | Stacc Sessions - Full-Stack Developer & Technical Writer",
  description:
    "Adesheye's portfolio, showcasing full-stack development skills, innovative digital design, and in-depth technical writings on JavaScript, Next.js, and more. A hub for bringing digital ideas to life.",
  keywords: [
    "Desheye",
    "Stacc Sessions",
    "Full-Stack Developer",
    "Technical Writer",
    "Portfolio",
    "JavaScript",
    "Next.js",
    "React",
    "Node.js",
    "Web Development",
    "Digital Design",
    "Digital Marketing",
  ],
  author: "Desheye",
  openGraph: {
    title: "Desheye | Stacc Sessions",
    description:
      "Desheye's portfolio, showcasing full-stack development skills, innovative digital design, and in-depth technical writings on JavaScript, Next.js, and more. A hub for bringing digital ideas to life.",
    url: "https://desheye.vercel.app/",
    siteName: "Stacc Sessions",
    images: [
      {
        url: "/img/Desheye.png", // This URL now correctly resolves from metadataBase
        width: 1200,
        height: 630,
        alt: "Desheye's Stacc Sessions Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheStacSessions",
    creator: "@TheStacSessions",
    title: "Desheye | Stacc Sessions",
    description:
      "Desheye's portfolio, showcasing full-stack development skills, innovative digital design, and in-depth technical writings on JavaScript, Next.js, and more.",
    // The image URL is now a full, correct URL
    images: {
      url: "https://pbs.twimg.com/profile_images/1931116500032872448/TM8fZt96.jpg",
      alt: "Desheye's Stacc Sessions Portfolio",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${prata.variable} ${playfair.variable} ${outfit.variable} ${abril.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
