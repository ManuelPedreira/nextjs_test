"use client"

import { useState } from "react";
import styles from "./LikeButton.module.css"

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return <button className={styles.button} onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>;
}
