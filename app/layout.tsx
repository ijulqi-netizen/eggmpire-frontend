import PageWrapper from "@/components/layout/PageWrapper";
import type { Metadata } from "next";
import { Baskervville, Montserrat } from "next/font/google";
import "./globals.css";

const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Eggmpire",
  description: "Company profile",
  icons: {
    icon: "/favicon-eggm-br.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baskervville.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
