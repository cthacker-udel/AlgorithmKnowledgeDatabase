import React from "react";

import GraphBackground from "@/assets/backgrounds/Algorithms/Graph/graphbg.jpg";
import { useBackground } from "@/hooks/useBackground";

/**
 * This page houses all the information related to Graph algorithms I have learned along
 * my journey within CS.
 *
 * @returns - The Graph algorithms page
 */
export const Graph = (): JSX.Element => {
    useBackground(GraphBackground, { backgroundOpacity: 0.45 });

    return <div>{"Hello"}</div>;
};
