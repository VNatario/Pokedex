import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "next/head";

import styles from "./Layout.module.css";

import { Press_Start_2P } from "next/font/google";
const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <div className={pressStart2P.className}>
        <Navbar />
        <main className={styles.container}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
