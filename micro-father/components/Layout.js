import React from "react";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.main}>{children}</div>;
}
