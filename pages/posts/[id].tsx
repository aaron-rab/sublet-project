import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

// [] square brackets in the file name makes ita dynamic route
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// nextjs will automatically call these functions.
//  If you dont use this, it will be statically generates, but you wont be
// prerendering the dynamic routes.
//getStaticPaths prerenders urls at build time. Meaning it creates urls I think
export async function getStaticPaths() {
  // return a list of possible value for id
  const paths = getAllPostIds();
  console.log("paths:", paths);
  return {
    paths,
    fallback: false, // this means that any paths not returned in paths will 
  };                 // result in a 404 page. If its set to true, then next will
}                    // generate the requested path and use that generated pg for all future requests

// how does get static props ddo it for all of the params objects?
// params is automatically passed to getStaticProps for dynamic routing
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
