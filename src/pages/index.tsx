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
            <meta
                content="App to track algorithm knowledge, and point to repos where that knowledge is present"
                name="description"
            />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <main className={styles.main_page}>
            <HomePage />
        </main>
    </>
);

export default Home;
