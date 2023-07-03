import "./globals.css";
import styles from "./layout.module.css";

import { Metadata } from "next";

import { Provider } from "@/lib/Provider";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

import { Sidebar } from "@/components/@common/blocks/Sidebar";
import { Header } from "@/components/@common/blocks/Header";

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
          <body>
            <div className={styles.wrapper}>
              <Sidebar />
              <div className={styles["body-wrapper"]}>
                <Header />
                <div className={styles["body-content-wrapper"]}>{children}</div>
              </div>
            </div>
          </body>
        </html>
      </StyledComponentsRegistry>
    </Provider>
  );
}
