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
          margin: "0px auto",
          padding: "100px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
        }}
      >
        {feeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </div>
    </>
  );
}
