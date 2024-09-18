import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

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
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Sublets Leases at near Drexel Philadelphia"
        />
        <meta property="og:image" content={`/ogIndexImg.png`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" contnet="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {landingPg ? (
          <>
            <div class="logo">
              <h1 className={styles.logoText}>Linda</h1>
              
              <select>
                  <option>Drexel</option>
              </select>
          </div>
            
            <Image
              priority
              src="/logo.png"
              className={utilStyles.logo}
              height={128}
              width={128}
              alt=""
            />
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
    </div>
  );
}
