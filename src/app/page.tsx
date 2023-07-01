import styles from "./page.module.css";

import { baseUrl } from "@/common/url";

import type { Feed } from "@/types/general";

import { FeedCard } from "@/components/@피드/organisms/FeedCard";

async function getFeeds() {
  const res = await fetch(`${baseUrl}/api/feed`, { cache: "no-store" });

  return res.json();
}

export default async function HomePage() {
  const { feeds }: { feeds: Feed[] } = await getFeeds();

  return (
    <div className={styles["mainpage-wrapper"]}>
      <div className={styles["cards-wrapper"]}>
        {feeds.reverse().map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </div>
      <div className={styles["rank-wrapper"]}>
        <div className={styles["rank-title"]}>Top Views</div>
        <div className={styles["user-wrapper"]}>
          <div className={styles["rank"]}>1.</div>
          <div className={styles["profile-image-wrapper"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
            </svg>
          </div>
          <div className={styles["username"]}>User 1</div>
        </div>
        <div className={styles["user-wrapper"]}>
          <div className={styles["rank"]}>2.</div>
          <div className={styles["profile-image-wrapper"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
            </svg>
          </div>
          <div className={styles["username"]}>User 2</div>
        </div>
        <div className={styles["user-wrapper"]}>
          <div className={styles["rank"]}>3.</div>
          <div className={styles["profile-image-wrapper"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
            </svg>
          </div>
          <div className={styles["username"]}>User 3</div>
        </div>
      </div>
    </div>
  );
}
