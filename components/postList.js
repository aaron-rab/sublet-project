import { getAllPosts } from "../services/post";
import { useState, useEffect } from "react";
import utilStyles from "../styles/utils.module.css";

import { useQuery } from "@tanstack/react-query";

export default function PostList() {
  //console.log("POSTLIST posts:", posts);
  //old use effect stuff
  //const [posts, setPosts] = useState();
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getAllPosts(),
    queryKey: ["posts"],
  });
  
  // old use effect stuff
  // useEffect(() => {
  //   getAllPosts()
  //     .then((res) => {
  //       console.log("POSTS::::::", res.posts);
  //       setPosts(res.posts);
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  if (isLoading) return <p>Loading Listings...</p>;
  if (isError) return <div>Sorry There was an Error</div>;

 
  return (
    <ul className={`${utilStyles.center} ${utilStyles.headingMd}`}>
      {console.log("TAN RESUTS:", )}
      {
        data?.posts.map((post) => (
          <li key={post.id}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </li>
        ))
      }
    </ul>
  );
}
