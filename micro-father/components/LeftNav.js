import React from "react";
import styles from "./LeftNav.module.css";

export default function LeftNav() {
  const nav = [
    {
      path: "/page1",
      name: "local",
    },
    {
      path: "/page2",
      name: "son",
    },
    {
      path: "/page3",
      name: "son1",
    },
    {
      path: "/page4",
      name: "son2",
    },
  ];

  return (
    <div className={styles.left}>
      {nav.map(({ path, name }) => (
        <h1 className={styles.h1}>
          <a href={path} className={styles.a}>
            {name}
          </a>
        </h1>
      ))}
    </div>
  );
}
