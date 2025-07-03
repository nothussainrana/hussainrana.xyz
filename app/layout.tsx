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
  title: "Hussain Rana - Full-Stack Developer & Software Engineer",
  description: "Experienced Full-Stack Developer specializing in Node.js, React, Next.js, and modern web technologies. Based in Kuala Lumpur, Malaysia.",
  keywords: ["Full-Stack Developer", "Software Engineer", "React", "Next.js", "Node.js", "TypeScript", "JavaScript"],
  authors: [{ name: "Hussain Rana" }],
  creator: "Hussain Rana",
  openGraph: {
    title: "Hussain Rana - Full-Stack Developer & Software Engineer",
    description: "Experienced Full-Stack Developer specializing in Node.js, React, Next.js, and modern web technologies.",
    url: "https://hussainrana.xyz",
    siteName: "Hussain Rana Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain Rana - Full-Stack Developer & Software Engineer",
    description: "Experienced Full-Stack Developer specializing in Node.js, React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
