import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/client/header/Header";
import Footer from "@/components/client/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ApolloWrapper } from "@/components/apollo-provider-wrapper";
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkiRent",
  description: "Location de matériel de ski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ApolloWrapper>
            <Header />
            {children}
            <Footer />
          </ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
