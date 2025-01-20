import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import ReactQueryProvider from "../helpers/providers/ReactQueryProvider";

const name = "Subletto";
export const siteTitle = "Next.js Sample Project";

// children is everything that is between the layout tags
// home is whether or not we are in the home page
export default function Layout({ children, landingPg }) {
  // what were doing is applying porerties of the container to the
  // to the div that wraps everything on the first post page

  //we return everything that is between the Layout tags as the children.
  //the children are passed in the bottom in the main tag
  return (
    <div className="min-h-screen  bg-center bg-cover">
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Sublets Leases at near Drexel Philadelphia"
        />
        <meta property="og:image" content={`/ogIndexImg.png`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" contnet="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <ReactQueryProvider>
        <header>
          {landingPg ? (
            <>
            <div className="bg-gray-400 h-32 lg:h-44 ">
              <nav className="flex-col justify-evenly items-center ml-5 lg:ml-5">
                
                <ul>
                  <li><Link href="/"></Link></li>
                </ul>
                <Image
                  priority
                  src="/logo.png"
                  height={128}
                  width={128}
                  alt=""
                  className="w-24 lg:w-32"
                />
                <h1 className="font-Lato text-2xl lg:text-4xl -mt-3">Subletto</h1>
              </nav>
              </div>
            </>
          ) : (
            <>
              <h1 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInhereit}>
                  {name}
                </Link>
              </h1>
            </>
          )}
        </header>
        <main>{children}</main>
        {!landingPg && (
          <div className={styles.backToHome}>
            <Link href="/">Back to home</Link>
          </div>
        )}
      </ReactQueryProvider>
    </div>
  );
}
