import Image from "next/image";
import styles from "./page.module.css";

const fetchCommentsById = async (id) => {
  //await new Promise(resolve => setTimeout(resolve, 2000));

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchCommentsById(id);

  return (
    <div
      className={styles.container}
      /*       style={{
        fontSize: "12px",
        backgroundColor: "#222",
        padding: "1rem 3rem",
        borderRadius: "5px",
      }} */
    >
      {comments.map(({ id, name, email, body }) => (
        <article key={id}>
          <div className={styles.header}>
            <Image
              src={`https://api.dicebear.com/9.x/notionists/svg?seed=${email}`}
              alt={email}
              width={50}
              height={50}
            />
            <div>
              <p className={styles.name}>{name}</p>
              <p className={styles.email}>{email}</p>
            </div>
          </div>
          <p className={styles.body}>{body}</p>
        </article>
      ))}
    </div>
  );
}
