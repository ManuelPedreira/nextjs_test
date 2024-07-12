import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function PostLayout({ params, children }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <div>
      <article className={styles.post}>
        <Image
          src={`https://api.dicebear.com/9.x/notionists/svg?seed=${post.id}`}
          width={200}
          height={200}
          alt="Profile Picture"
        />
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </article>
      <Link className={styles.button} href={`/posts/${id}/comments`}>View Comments</Link>
      {children}
    </div>
  );
}
