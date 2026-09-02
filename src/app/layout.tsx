
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
  title: {
    default: "Ariston Investa Group",
    template: "%s | Ariston Investa Group",
  },

  description:
    "Ariston Investa Group is a diversified business group focused on building trusted businesses, delivering quality solutions, and creating long-term value.",

  keywords: [
    "Ariston Investa Group",
    "Ariston Investa",
    "Ariston Investa Group India",
  ],

  robots: {
    index: true,
    follow: true,
  },

 verification: {
  google: "q9ApVd-UXvpjbCo6NKTbPSB21nF_iDhOwFtx1HyZI40",
},

  icons: {
    icon: "/arlogo.png",
  },

  openGraph: {
    title: "Ariston Investa Group",
    description:
      "Ariston Investa Group is a diversified business group focused on building trusted businesses, delivering quality solutions, and creating long-term value.",
    siteName: "Ariston Investa Group",
    type: "website",
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
