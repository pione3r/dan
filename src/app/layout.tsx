import { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import StyledComponentsRegistry from "@/lib/styledComponentsRegistry";

import { NextAuthProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D&N",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
