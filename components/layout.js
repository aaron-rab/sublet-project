import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Rab";
export const siteTitle = "Next.js Sample Project";

// children is everything that is between the layout tags
// home is whether or not we are in the home page
export default function Layout({ children, home }) {
  // what were doing is applying porerties of the container to the
  // to the div that wraps everything on the first post page

  //we return everything that is between the Layout tags as the children.
  //the children are passed in the bottom in the main tag
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a blog with Next JS"
        />
        <meta property="og:image" content={``} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" contnet="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={128}
              width={128}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={128}
                width={128}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInhereit}>
                    {name}
                </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
            <Link href="/">Back to home</Link>
        </div>
      )}
    </div>
  );
}
