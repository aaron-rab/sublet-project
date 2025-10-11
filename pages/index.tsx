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

      {/* should make default heading styles in tailwind */}
      <section
        className={`p-1 text-center`}
      >
        <h2 className={'p-1 text-2xl mt-8 lg:mt-16 font-Lato font-normal lg:text-3xl'}>
          MATCHING SUBLETTERS WITH TENANTS AT COLLEGE CAMPUSES
        </h2>
        <p className={'p-1 mt-9 lg:mt-16 text-lg font-Roboto lg:text-2xl'}>How can we help you?</p>

        <div className={`flex justify-center mt-8 gap-9 md:gap-20 xl:gap-40 lg:mt-14`}>
          <BigButton href={"/"} text={"I'M SUBLETTING"}/> 
          <BigButton href={"/allPosts"} text={"LOOKING FOR SUBLET"}/>
        </div>

        

        <p className={"p-5 mt-8 text-lg lg:mt-20 lg:text-2xl font-Lato"}>We will find you what you want</p>
        <p className={`text-lg text-lightText font-Roboto`}>
          Made by a Drexel Student that understands the difficulty of the
          subletting process
        </p>
      </section>

      <section className="bg-gray-300 h-96 mt-16">

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
      <div className={`flex justify-evenly mt-40`}>
          <Link href="/register">
            <button className={"px-9 py-5 bg-slate-300 rounded-md text-xl"}>
              Register
            </button>
          </Link>
          <Link href="/login">
            <button className={"px-9 py-5 bg-slate-300 rounded-md text-xl"}>
              Login
            </button>
          </Link>
          
        </div>

        <div className={`${utilStyles.padding25px} ${utilStyles.flexContainer}`}>
        <Link href="/createListing">
            <button className={utilStyles.bigButton}>
              Create Listing
            </button>
        </Link>
        <Link href="/allPosts">
            <button className={utilStyles.bigButton}>
              View Listings
            </button>
        </Link>
        </div>
  </Layout>
  );
}
