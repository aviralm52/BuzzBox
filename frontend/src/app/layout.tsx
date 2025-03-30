import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import SessionProvider from "@/providers/SessionProvider";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuzzBox",
  description: "Chat without Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Toaster richColors duration={10000} />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
