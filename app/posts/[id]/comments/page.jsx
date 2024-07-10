import Image from "next/image";

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
    <ul
      style={{
        fontSize: "12px",
        backgroundColor: "#222",
        padding: "1rem 3rem",
        borderRadius: "5px",
      }}
    >
      {comments.map(({ id, name, email, body }) => (
        <li key={id}>
          <Image src={`https://api.dicebear.com/9.x/notionists/svg?seed=${email}`}
          alt={email}
          width={200}
          height={200} 
          />
          <h1>{`${name} - ${email}`}</h1>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
}
