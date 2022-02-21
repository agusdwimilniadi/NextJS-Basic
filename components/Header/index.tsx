import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
export default function index() {
  return (
    <>
      <header className={styles.container}>
        <h1>Welcome Page</h1>
        <div className="container"></div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/users">User</Link>
          </li>
          <li className={styles.item}>
            <Link href="/users/detail">User Detail</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
