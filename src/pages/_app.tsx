import "@/styles/globals.css";

import type { AppProps } from "next/app";
import React from "react";

/**
 * Read more here: https://nextjs.org/docs/advanced-features/custom-app
 *
 * @param props - The properties of the App
 * @param props.Component - The active page, when you navigate between pages, the Component prop changes
 * @param props.pageProps - Object with initial props that were preloaded for your page by one of NextJs's data fetching methods
 * @returns - The App component, which is used to initialize pages
 */
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Component {...pageProps} />
);

export default App;
