//src/app/layout.js
import { Cinzel_Decorative, Prata } from "next/font/google";
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

export const metadata = {
  title: "Stacc Sessions",
  description:
    "Bringing your ideas to life with innovative digital design and development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // Apply the new font CSS variables to the body
        className={`${cinzel.variable} ${prata.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
