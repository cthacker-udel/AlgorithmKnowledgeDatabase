/* eslint-disable @typescript-eslint/no-floating-promises -- ignore */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Accordion, OverlayTrigger } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import { TextConstants } from "@/assets";
import GraphBackground from "@/assets/backgrounds/Algorithms/Graph/graphbg.jpg";
import { Layout } from "@/common";
import { renderTooltip } from "@/helpers";
import { useBackground } from "@/hooks/useBackground";

import styles from "./Graph.module.css";

/**
 * This page houses all the information related to Graph algorithms I have learned along
 * my journey within CS.
 *
 * @returns - The Graph algorithms page
 */
export const Graph = (): JSX.Element => {
    useBackground(GraphBackground, { backgroundOpacity: 0.45 });

    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>{"Graph Algorithms"}</title>
            </Head>
            <div className={`${styles.graph_main} shadow-lg`}>
                <div className={`${styles.graph_title}`}>
                    {TextConstants.GRAPH_ALGOS.TITLE}
                </div>
                <div>
                    <Accordion
                        alwaysOpen
                        className={styles.graph_accordion}
                        defaultActiveKey="0"
                        flush
                    >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <span className={styles.graph_accordion_header}>
                                    <span
                                        className={`${styles.graph_accordion_title}`}
                                    >
                                        {"Depth-First-Search (DFS)"}
                                    </span>
                                    <OverlayTrigger
                                        overlay={(
                                            properties: OverlayInjectedProps,
                                        ): JSX.Element =>
                                            renderTooltip(
                                                properties,
                                                "View on github",
                                            )
                                        }
                                        placement="top"
                                    >
                                        <i
                                            className={`fa-brands fa-github fa-xl ${styles.graph_github_icon}`}
                                            onClick={(): void => {
                                                router.push(
                                                    "https://github.com/cthacker-udel/GraphAlgos/blob/master/graph_algos/dfs.py",
                                                );
                                            }}
                                        />
                                    </OverlayTrigger>
                                </span>
                            </Accordion.Header>
                            <Accordion.Collapse
                                className={styles.graph_accordion_body}
                                eventKey="0"
                            >
                                <span>
                                    {
                                        "This is an algorithm for traversing a tree. My understanding of the algorithm is that instead of searching layer by layer, it makes one move, and then searches as deep as possible from that move, and then continues that pattern throughout the rest of the nodes, marking nodes that have been previously explored to avoid re-visiting nodes. I have implemented it in many languages, and theoretically as well in some of my classes. This is an interesting algorithm compared to the Breadth-First-Search algorithm, which peels layer by layer, instead of going to the maximum depth then recursively returning to it's original node."
                                    }
                                </span>
                            </Accordion.Collapse>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <span className={styles.graph_accordion_header}>
                                    <span
                                        className={styles.graph_accordion_title}
                                    >
                                        {"Breadth-First-Search (BFS)"}
                                    </span>
                                    <OverlayTrigger
                                        overlay={(
                                            properties: OverlayInjectedProps,
                                        ): JSX.Element =>
                                            renderTooltip(
                                                properties,
                                                "View on Github",
                                            )
                                        }
                                        placement="top"
                                    >
                                        <i
                                            className={`fa-brands fa-github fa-xl ${styles.graph_github_icon}`}
                                        />
                                    </OverlayTrigger>
                                </span>
                            </Accordion.Header>
                            <Accordion.Collapse
                                className={styles.graph_accordion_body}
                                eventKey="1"
                            >
                                <span>
                                    {
                                        "Breadth-First-Search is a graph algorithm that, reverse of Depth-First-Search, peels off the layers of the nodes surrounding it first, rather then choosing a path and going as far as possible in that path. This algorithm uses a stack, which has LIFO properties, while DFS uses a queue, which has FIFO properties."
                                    }
                                </span>
                            </Accordion.Collapse>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <span className={styles.graph_accordion_header}>
                                    <span
                                        className={styles.graph_accordion_title}
                                    >
                                        {"Monte-Carlo-Tree-Search (MCTS)"}
                                    </span>
                                    <OverlayTrigger
                                        overlay={(
                                            properties: OverlayInjectedProps,
                                        ): JSX.Element =>
                                            renderTooltip(
                                                properties,
                                                "View on Github",
                                            )
                                        }
                                        placement="top"
                                    >
                                        <i
                                            className={`fa-brands fa-github fa-xl ${styles.graph_github_icon}`}
                                            onClick={(): void => {
                                                router.push(
                                                    "https://github.com/cthacker-udel/ChessPredictor",
                                                );
                                            }}
                                        />
                                    </OverlayTrigger>
                                </span>
                            </Accordion.Header>
                            <Accordion.Collapse
                                className={styles.graph_accordion_body}
                                eventKey="2"
                            >
                                <span>
                                    {
                                        "Monte-Carlo-Tree-Search comes from the algorithm called Beta-Pruning, then the algorithm Minimax, which are primarily used for game simulators. I used this algorithm when I was interested in building my own chess bot, one that could predict which move was the best move to make. This project took me quite some time to complete, and I even got the algorithm to eventually compile and work. The algorithm was tricky to implement, and involved lots of complex data structures such as making a modified tree with modified nodes that had a ranking for each node, which was determined by the outcome of the game simulations that took place."
                                    }
                                </span>
                            </Accordion.Collapse>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </Layout>
    );
};
