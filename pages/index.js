import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

// The function is async because we are getting data
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Home() has access to props returned above due to nextjs magic
// Its cleaner to use destructuring to get allPostsdata but I am using
// props to make sure that I understand what going on
export default function Home(props) {
  {
    console.log("allPostsData:", props.allPostsData);
  }
  return (
    <Layout landingPg>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.center}`}
      >
        <h2 className={utilStyles.headingLg}>
          Matching Subletters With Tentants at College Campuses
        </h2>
        <p className={`${utilStyles.padding25px}`}>How can we help you?</p>

        <div class={`${utilStyles.padding25px} ${utilStyles.flexContainer}`}>
          <Link href="/posts/ssg-ssr">
            <button class={utilStyles.bigButton}>
              I'm subletting and need to find a tenant
            </button>
          </Link>
          <Link href="/posts/ssg-ssr">
            <button class={utilStyles.bigButton}>
              I'm looking for a sublet or lease
            </button>
          </Link>
        </div>

        <p class={utilStyles.padding25px}>We will find you what you want</p>
        <p class={`${utilStyles.lightText} `}>
          Made by a Drexel Student that understands the difficulty of the
          subletting process
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightTest}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
