import "./globals.css";

import { Metadata } from "next";

import StyledComponentsRegistry from "@/lib/styledComponentsRegistry";

import { NextAuthProvider } from "./provider";

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
      <body>
        <NextAuthProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
