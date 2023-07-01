import styles from "./page.module.css";

import { baseUrl } from "@/common/url";

import { Feed } from "@/components/@피드/organisms/Feed";
import { FeedSideBar as SideBar } from "@/components/@좋아요/blocks/FeedSideBar";
import { CommentContainer } from "@/components/@댓글/organisms/CommentContainer";

import type { Feed as FeedType } from "@/types/general";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

async function getFeed(id: string) {
  const session = await getServerSession(authOptions);

  const res = await fetch(
    `${baseUrl}/api/feed/${id}?username=${session?.user.username}`,
    { cache: "no-cache" }
  );
  const feed = await res.json();

  return feed;
}

export default async function FeedPage({ params }: { params: { id: string } }) {
  const feed: FeedType = await getFeed(params.id);

  return (
    <>
      <div className={styles.SubWrapper}>
        <SideBar feed={feed} />
        <Feed feed={feed} />
        <CommentContainer feedId={feed.id} comments={feed.comments} />
      </div>
    </>
  );
}
