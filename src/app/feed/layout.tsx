import styles from "./layout.module.css";

import { Sidebar } from "@/components/@common/blocks/Sidebar";
import { Header } from "@/components/@common/blocks/Header";

export default function FeedAndEditPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles["body-wrapper"]}>
        <Header />
        <div className={styles["body-content-wrapper"]}>{children}</div>
      </div>
    </div>
  );
}
