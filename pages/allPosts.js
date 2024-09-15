// import { getAllPosts } from "../services/post";
import Layout from "../components/layout";
import PostList from "../components/postList";

// export async function getServerSideProps() {
//     const { posts } = await getAllPosts();
//     return {
//         props: {
//             posts: posts
//         }
//     }
// }

export default function AllPosts({posts}) {
    return (
        <Layout>
            <PostList />
        </Layout>
    )
}