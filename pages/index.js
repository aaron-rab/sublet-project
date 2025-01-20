import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Tester from "../components/tester";
import BigButton from "../components/bigButton";

// The function is async because we are getting data
// Gets blog post data
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
    //console.log("allPostsData:", props.allPostsData);
  }
  return (
    <Layout landingPg>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Tester />

      {/* should make default heading styles in tailwind ${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.center}*/}
      <section
        className={`p-1 text-center`}
      >
        <h2 className={'p-1 text-2xl mt-8 font-Lato font-semibold'}>
          Matching Subletters With Tentants at College Campuses
        </h2>
        <p className={'p-1 mt-9 text-lg font-Roboto'}>How can we help you?</p>

        <div class={`flex justify-center mt-8 gap-9 md:gap-20 xl:gap-72`}>
          <BigButton href={"/"} text={"I'M SUBLETTING"}/> 
          <BigButton href={"/"} text={"LOOKING FOR SUBLET"}/>
        </div>

        

        <p class={"p-5 mt-8 text-lg"}>We will find you what you want</p>
        <p class={`text-lg text-lightText`}>
          Made by a Drexel Student that understands the difficulty of the
          subletting process
        </p>
      </section>
      
      {/*  BLOG POSTS
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
    */}


     {/* Here temporarily */}
      <div class={`flex justify-evenly mt-40`}>
          <Link href="/register">
            <button class={"px-9 py-5 bg-slate-300 rounded-md text-xl"}>
              Register
            </button>
          </Link>
          <Link href="/login">
            <button class={"px-9 py-5 bg-slate-300 rounded-md text-xl"}>
              Login
            </button>
          </Link>
          
        </div>

        <div class={`${utilStyles.padding25px} ${utilStyles.flexContainer}`}>
        <Link href="/createPost">
            <button class={utilStyles.bigButton}>
              Create Listing
            </button>
        </Link>
        <Link href="/allPosts">
            <button class={utilStyles.bigButton}>
              View Listings
            </button>
        </Link>
        </div>
  </Layout>
  );
}
