/* eslint-disable @typescript-eslint/no-floating-promises -- disabled for router */
import { useRouter } from "next/router";
import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { type OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import HomePageBackground from "@/assets/backgrounds/HomePage/bg4.gif";
import { renderTooltip } from "@/helpers";
import { useBackground } from "@/hooks/useBackground";

import styles from "./HomePage.module.css";
import { Layout } from "@/common";
import { TextConstants } from "@/assets";

/**
 * The HomePage component
 *
 * @returns - The homepage element, which is used to render the initial page that is displayed upon application startup
 */
const HomePage: () => JSX.Element = (): JSX.Element => {
    const [rotateNodes, setRotateNodes] = React.useState<boolean>(false);
    const [rotateGreedy, setRotateGreedy] = React.useState<boolean>(false);
    const [rotateDP, setRotateDP] = React.useState<boolean>(false);
    const [rotateBeginnerAlgos, setRotateBeginnerAlgos] =
        React.useState<boolean>(false);
    const [rotateSortingAlgos, setRotateSortingAlgos] =
        React.useState<boolean>(false);
    const [rotateFindingAlgorithms, setRotateFindingAlgorithms] =
        React.useState<boolean>(false);
    useBackground(HomePageBackground);

    const router = useRouter();

    const redirect = React.useCallback(
        (link: string) => {
            router.push(link);
        },
        [router],
    );

    return (
        <Layout customLayoutStyle={styles.home_page_main}>
            <span className={styles.home_page_title}>
                {TextConstants.HOME_PAGE.TITLE}
            </span>
            <span className={styles.home_page_subtitles}>
                <span className={styles.home_page_subtitle}>
                    {TextConstants.HOME_PAGE.SUBTITLE_1}
                </span>
                <span className={styles.home_page_subtitle}>
                    {TextConstants.HOME_PAGE.SUBTITLE_2}
                </span>
            </span>
            <span className={styles.home_page_footer_title}>
                {TextConstants.HOME_PAGE.FOOTER_TITLE}
            </span>
            <div className={styles.home_page_footer_items}>
                <span>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            renderTooltip(properties, "Graph Algorithms")
                        }
                        placement="bottom"
                    >
                        <div
                            className={`${styles.home_page_footer_icon} ${styles.home_page_footer_graph_algos} shadow-lg`}
                            onClick={(): void => {
                                redirect("algorithms/graph");
                            }}
                            onMouseEnter={(): void => {
                                setRotateNodes(true);
                            }}
                            onMouseLeave={(): void => {
                                setRotateNodes(false);
                            }}
                        >
                            <i
                                className={`fa-solid fa-circle-nodes fa-md ${
                                    rotateNodes ? "fa-flip" : ""
                                }`}
                            />
                        </div>
                    </OverlayTrigger>
                </span>
                <span>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            renderTooltip(properties, "Greedy Algorithms")
                        }
                        placement="bottom"
                    >
                        <div
                            className={`${styles.home_page_footer_icon} ${styles.home_page_footer_greedy_algos} shadow-lg`}
                            onClick={(): void => {
                                redirect("greedy-algorithms");
                            }}
                            onMouseEnter={(): void => {
                                setRotateGreedy(true);
                            }}
                            onMouseLeave={(): void => {
                                setRotateGreedy(false);
                            }}
                        >
                            <i
                                className={`fa-solid fa-money-bill fa-md ${
                                    rotateGreedy ? "fa-shake" : ""
                                }`}
                            />
                        </div>
                    </OverlayTrigger>
                </span>
                <span>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            renderTooltip(properties, "Dynamic Programming")
                        }
                        placement="bottom"
                    >
                        <div
                            className={`${styles.home_page_footer_icon} ${styles.home_page_footer_dynamic_programming} shadow-lg`}
                            onClick={(): void => {
                                redirect("dynamic-programming");
                            }}
                            onMouseEnter={(): void => {
                                setRotateDP(true);
                            }}
                            onMouseLeave={(): void => {
                                setRotateDP(false);
                            }}
                        >
                            <i
                                className={`fa-solid fa-recycle ${
                                    rotateDP ? "fa-spin" : ""
                                }`}
                            />
                        </div>
                    </OverlayTrigger>
                </span>
                <span>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            renderTooltip(properties, "Beginner Algorithms")
                        }
                        placement="bottom"
                    >
                        <div
                            className={`${styles.home_page_footer_icon} ${styles.home_page_footer_beginner_algorithms} shadow-lg`}
                            onClick={(): void => {
                                redirect("beginner-algorithms");
                            }}
                            onMouseEnter={(): void => {
                                setRotateBeginnerAlgos(true);
                            }}
                            onMouseLeave={(): void => {
                                setRotateBeginnerAlgos(false);
                            }}
                        >
                            <i
                                className={`fa-solid fa-egg ${
                                    rotateBeginnerAlgos ? "fa-bounce" : ""
                                }`}
                            />
                        </div>
                    </OverlayTrigger>
                </span>
                <span>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            renderTooltip(properties, "Sorting Algorithms")
                        }
                        placement="bottom"
                    >
                        <div
                            className={`${styles.home_page_footer_icon} ${styles.home_page_footer_sorting_algorithms} shadow-lg`}
                            onClick={(): void => {
                                redirect("sorting-algorithms");
                            }}
                            onMouseEnter={(): void => {
                                setRotateSortingAlgos(true);
                            }}
                            onMouseLeave={(): void => {
                                setRotateSortingAlgos(false);
                            }}
                        >
                            <i
                                className={`fa-solid fa-arrow-up-z-a ${
                                    rotateSortingAlgos ? "fa-beat" : ""
                                }`}
                            />
                        </div>
                    </OverlayTrigger>
                </span>
                <span>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            renderTooltip(properties, "Finding Algorithms")
                        }
                        placement="bottom"
                    >
                        <div
                            className={`${styles.home_page_footer_icon} ${styles.home_page_footer_finding_algorithms} shadow-lg`}
                            onClick={(): void => {
                                redirect("finding-algorithms");
                            }}
                            onMouseEnter={(): void => {
                                setRotateFindingAlgorithms(true);
                            }}
                            onMouseLeave={(): void => {
                                setRotateFindingAlgorithms(false);
                            }}
                        >
                            <i
                                className={`fa-solid fa-magnifying-glass ${
                                    rotateFindingAlgorithms ? "fa-bounce" : ""
                                }`}
                            />
                        </div>
                    </OverlayTrigger>
                </span>
            </div>
        </Layout>
    );
};

export default HomePage;
