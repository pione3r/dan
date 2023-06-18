import type { Feed } from "@/types/general";

import { baseUrl } from "@/common/url";

import { FeedCard } from "@/components/@피드/organisms/FeedCard";
import { Header } from "@/components/Header";

async function getFeeds() {
  const res = await fetch(`${baseUrl}/api/feed`, { cache: "no-store" });

  return res.json();
}

export default async function HomePage() {
  const { feeds }: { feeds: Feed[] } = await getFeeds();

  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "600px",
          margin: "100px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {feeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </div>
    </>
  );
}
