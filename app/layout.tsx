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
  title: "Roland Kenneth P | Full Stack Developer",
  description:
    "Roland Kenneth P is a Full Stack Developer from Bangalore specializing in Next.js, React, Node.js, PostgreSQL, and modern web applications.",
  keywords: [
    "Roland Kenneth P",
    "Roland Kenneth",
    "Full Stack Developer Bangalore",
    "Next.js Developer Bangalore",
    "React Developer Bangalore",
    "Software Developer",
  ],
  authors: [{ name: "Roland Kenneth P" }],
  creator: "Roland Kenneth P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Roland Kenneth P",
              url: "https://rolandkenneth.vercel.app/",
              jobTitle: "Full Stack Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "India",
              },
              sameAs: [
                "https://github.com/rolandkennethp",
                "https://www.linkedin.com/in/rolandkennethp/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
