import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { type OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import { renderTooltip } from "@/helpers";

import styles from "./HomePage.module.css";

/**
 * The HomePage component
 *
 * @returns - The homepage element, which is used to render the initial page that is displayed upon application startup
 */
const HomePage: () => JSX.Element = (): JSX.Element => (
    <div className={styles.home_page_main}>
        <span className={styles.home_page_title}>
            {"Algorithm Knowledge Database"}
        </span>
        <span className={styles.home_page_subtitles}>
            <span className={styles.home_page_subtitle}>
                {
                    "Collection of the algorithms I've understood while learning Computer Science."
                }
            </span>
            <span className={styles.home_page_subtitle}>
                {"I will be adding algorithms to this page as I learn them!"}
            </span>
        </span>
        <span className={styles.home_page_footer_title}>
            {"Choose one of the sections below to learn more!"}
        </span>
        <div className={styles.home_page_footer_items}>
            <OverlayTrigger
                overlay={(properties: OverlayInjectedProps): JSX.Element =>
                    renderTooltip(properties, "Graph Algorithms")
                }
                placement="bottom"
            >
                <div className={styles.home_page_footer_graph_algos}>
                    <i className="fa-solid fa-circle-nodes fa-md" />
                </div>
            </OverlayTrigger>
        </div>
    </div>
);

export default HomePage;
