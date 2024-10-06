import { getAllPosts } from "../services/post";
import { useState, useEffect } from "react";
import utilStyles from "../styles/utils.module.css";
import { useQuery } from "@tanstack/react-query";

export default function PostList() {

  const { data, isLoading, isError } = useQuery({
    queryFn: getAllPosts,
    queryKey: ["posts"],
  });
 
  if (isLoading) return <p>Loading Listings...</p>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <ul className={`${utilStyles.center} ${utilStyles.headingMd}`}>
      {data?.posts?.map((post) => (
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







 
 

//old use effect stuff
  //const [posts, setPosts] = useState();

 // old use effect stuff
  // useEffect(() => {
  //   getAllPosts()
  //     .then((res) => {
  //       console.log("POSTS::::::", res.posts);
  //       setPosts(res.posts);
  //     })
  //     .catch((e) => console.error(e));
  // }, []);
