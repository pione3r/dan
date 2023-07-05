import styles from "./page.module.css";

import { baseUrl } from "@/common/url";

import type { Feed } from "@/types/general";

import { FeedCards } from "@/components/FeedCards";

async function getFeeds() {
  const res = await fetch(`${baseUrl}/api/feed`, { cache: "no-store" });

  return res.json();
}

export default async function DashboardPage() {
  const { feeds }: { feeds: Feed[] } = await getFeeds();

  const feedsSortedByLikes = feeds.map((feed) => ({
    id: feed.id,
    title: feed.title,
    likes: feed.likes,
  }));

  return (
    <div className={styles["mainpage-wrapper"]}>
      <FeedCards feeds={feeds} />
      <div className={styles["rank-wrapper"]}>
        <div className={styles["rank-title"]}>Top Likes</div>
        {feedsSortedByLikes.map((feed, index) => (
          <div className={styles["user-wrapper"]} key={feed.id}>
            <div className={styles["rank"]}>{`${index + 1}.`}</div>
            <div className={styles["feed-title"]}>{feed.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
