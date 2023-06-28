import type { Feed } from "@/types/general";

import { baseUrl } from "@/common/url";

import { FeedCard } from "@/components/@피드/organisms/FeedCard";
import { Header } from "@/components/@common/blocks/Header";

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
          margin: "30px auto",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
        }}
      >
        {feeds.reverse().map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </div>
    </>
  );
}
