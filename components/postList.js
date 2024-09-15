import { getAllPosts } from "../services/post";
import { useState, useEffect } from "react";
import utilStyles from "../styles/utils.module.css";

export default function PostList() {
  //console.log("POSTLIST posts:", posts);
  const [posts, setPosts] = useState();

  useEffect(() => {
    getAllPosts()
      .then((res) => {
        console.log("POSTS::::::", res.posts);
        setPosts(res.posts);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <ul className={`${utilStyles.center} ${utilStyles.headingMd}`}>
      {posts ? (
        posts.map((post) => (
          <li key={post.id}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </li>
        ))
      ) : (
        <p>Loading Listings...</p>
      )}
    </ul>
  );
}
