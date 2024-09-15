export default function PostList({ posts }) {
    console.log("POSTLIST posts:", posts)
  return (
    <ul>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
