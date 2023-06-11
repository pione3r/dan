import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&N",
  description: "Landing Page",
};

export default function FeedPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
