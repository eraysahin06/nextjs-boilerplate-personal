import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && (
            <Image
              src={post.img}
              alt=""
              fill
              className={styles.img}
            />
          )}
        </div>
        <span className={styles.date}>2024.01.01</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
