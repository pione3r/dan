"use client";

import Link from "next/link";

import { useState } from "react";

import styles from "./index.module.css";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(pathname);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["sub-sub-wrapper"]}>
        <div className={styles["sub-wrapper"]}>
          <Link
            className={styles["sidebar-logo"]}
            href="/"
            onClick={() => setIsActive("/")}
          >
            D&N
          </Link>
          <nav className={styles["nav-wrapper"]}>
            <Link
              className={
                isActive === "/"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
              href="/"
              onClick={() => setIsActive("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z" />
              </svg>
              Dashboard
            </Link>
          </nav>
          <nav className={styles["nav-wrapper"]}>
            <div className={styles["nav-title"]}>PROFILE</div>
            <Link
              className={
                isActive === "/feed/edit"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
              href="/feed/edit"
              onClick={() => setIsActive("/feed/edit")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h340l240 240v156h-60v-116H520v-220H220v680h300v60H220Zm0-60v-680 680Zm536-223 28 28-164 164v51h51l164-164 28 28L687-80H580v-107l176-176Zm107 107L756-363l61-61q9-9 21-9t21 9l65 65q9 9 9 21t-9 21l-61 61Z" />
              </svg>
              New Feed
            </Link>
            <Link
              className={
                isActive === "/feeds"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
              href="/"
              onClick={() => setIsActive("/feeds")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M300-286q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
              </svg>
              My Feed
            </Link>
            <Link
              className={
                isActive === "/settings"
                  ? styles["nav-item-active"]
                  : styles["nav-item"]
              }
              href="/"
              onClick={() => setIsActive("/settings")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z" />
              </svg>
              Settings
            </Link>
          </nav>
          <div className={styles["nav-wrapper"]}>
            <div className={styles["nav-title"]}>OTHER</div>
            <div className={styles["light-mode-wrapper"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z" />
              </svg>
              Light Mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
