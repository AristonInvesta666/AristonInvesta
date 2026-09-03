import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aristoninvestagroup.com"),

  title: {
    default: "Ariston Investa Group | Building Businesses, Creating Value",
    template: "%s | Ariston Investa Group",
  },

  description:
    "Ariston Investa Group is a diversified business group focused on building trusted businesses, delivering quality solutions, and creating long-term value.",

keywords: [
  "Ariston Investa Group",
  "Ariston Investa",
  "Ariston Investa Group Singapore",
  "Ariston Investa Singapore",
],
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.aristoninvestagroup.com/",
  },

  verification: {
    google: "q9ApVd-UXvpjbCo6NKTbPSB21nF_iDhOwFtx1HyZI40",
  },

  icons: {
    icon: "/arlogo.png",
  },

openGraph: {
  title: "Ariston Investa Group | Building Businesses, Creating Value",
  description:
    "Ariston Investa Group is a diversified business group focused on building trusted businesses, delivering quality solutions, and creating long-term value.",
  url: "https://www.aristoninvestagroup.com/",
  siteName: "Ariston Investa Group",
  type: "website",
  locale: "en_SG",
  images: [
    {
      url: "/arlogo.png",
      width: 512,
      height: 512,
      alt: "Ariston Investa Group",
    },
  ],
},

  twitter: {
    card: "summary",
    title: "Ariston Investa Group | Building Businesses, Creating Value",
    description:
      "Ariston Investa Group is a diversified business group focused on building trusted businesses, delivering quality solutions, and creating long-term value.",
    images: ["/arlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}