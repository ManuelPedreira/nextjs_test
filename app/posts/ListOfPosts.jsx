import Link from "next/link";
import LikeButton from "./LikeButton";

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
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        {/* <Link href="posts/[id]" as={`/posts/${post.id}`}>*/}
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton />
    </article>
  ));
}
