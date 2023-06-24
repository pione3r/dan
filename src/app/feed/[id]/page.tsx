import styles from "./page.module.css";

import { baseUrl } from "@/common/url";

import { Header } from "@/components/@common/blocks/Header";
import { Feed } from "@/components/@피드/organisms/Feed";
import { CommentContainer as Comment } from "@/components/@댓글/organisms/CommentContainer";

async function getFeed(id: string) {
  const res = await fetch(`${baseUrl}/api/feed/${id}`, { cache: "no-cache" });
  const feed = await res.json();

  return feed;
}

export default async function FeedPage({ params }: { params: { id: string } }) {
  const feed = await getFeed(params.id);

  return (
    <>
      <Header />
      <div className={styles.body}>
        <Feed feed={feed} />
        <Comment feedId={feed.id} comments={feed.comments} />
      </div>
    </>
  );
}
