import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function PostLayout ({ params , children}) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h1>Esto es el post {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>View Comments</Link>
      {children}
    </article>
  );
};

