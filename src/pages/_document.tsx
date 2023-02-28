import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

/**
 * Read more here: https://nextjs.org/docs/advanced-features/custom-document
 *
 * @returns The modifications for the html and body tags applied to each page in the application
 */
const Document = (): JSX.Element => (
    <Html lang="en">
        <Head>
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link
                crossOrigin=""
                href="https://fonts.gstatic.com"
                rel="preconnect"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Golos+Text&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                rel="stylesheet"
            />
            <link
                crossOrigin="anonymous"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                rel="stylesheet"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
