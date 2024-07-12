import Link from "next/link";
import LikeButton from "./LikeButton";
import styles from "./ListOfPost.module.css";
import Image from "next/image";

const fetchPosts = () => {
  return fetch(
    "https://jsonplaceholder.typicode.com/posts",
    /* { cache: "no-store" } */ //refres the data each time
    { next: { revalidate: 60 } } //refresh the data each 60 seconds
  ).then((res) => res.json());
};

export default async function ListsofPosts() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <article className={styles.container} key={post.id}>
      <Image
        src={`https://api.dicebear.com/9.x/notionists/svg?seed=${post.id}`}
        width={50}
        height={50}
        alt="Profile Picture"
      />
      <Link href={`/posts/${post.id} `} className={styles.title}>
        <p>{post.title}</p>
      </Link>
      <LikeButton />
    </article>
  ));
}
