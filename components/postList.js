import { getAllPosts } from "../services/post";
import { useQuery } from "@tanstack/react-query";
import Post from "./post";

export default function PostList() {

  const { data, isLoading, isError } = useQuery({
    queryFn: getAllPosts,
    queryKey: ["posts"],
  });
 
  if (isLoading) return <p>Loading Listings...</p>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <ul>
      {data?.posts?.map((post) => (
        <li key={post.id}>
         <Post postData={{title: post.title, content: post.content}} />
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
