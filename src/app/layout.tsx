import "./globals.css";

import { Metadata } from "next";

import { Provider } from "@/lib/Provider";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

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
    <Provider>
      <StyledComponentsRegistry>
        <html>
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </head>
          <body>{children}</body>
        </html>
      </StyledComponentsRegistry>
    </Provider>
  );
}
