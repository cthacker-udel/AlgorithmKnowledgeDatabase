import Head from "next/head";
import React from "react";

import styles from "@/styles/Home.module.css";

import HomePage from "./HomePage";

/**
 *
 * @returns - The root component, the initial page that is loaded upon application start-up
 */
const Home = (): JSX.Element => (
    <>
        <Head>
            <title>{"Knowledge Tracker"}</title>
        </Head>
        <main className={styles.main_page}>
            <HomePage />
        </main>
    </>
);

export default Home;
