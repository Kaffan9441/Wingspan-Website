import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { TopNav } from "@/components/nav/TopNav";
import { Footer } from "@/components/nav/Footer";

const displaySerif = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const bodySans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wingspan Innovations · Aviation Consultancy · Karachi",
  description:
    "Bringing Aviation Innovation to Certified Reality. End-to-end aviation consultancy: airline establishment, certification, fleet planning, airport development, safety, training, and strategic advisory. Karachi, Pakistan.",
  metadataBase: new URL("https://wingspan.pk"),
  openGraph: {
    title: "Wingspan Innovations",
    description:
      "Bringing Aviation Innovation to Certified Reality. End-to-end aviation consultancy across Pakistan, the Middle East, Africa, and beyond.",
    type: "website",
    locale: "en_US",
  },
};

// viewport-fit=cover lets content extend behind the iPhone notch / Dynamic Island
// and home indicator so we can then pad safely with env(safe-area-inset-*).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySans.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SmoothScrollProvider>
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
