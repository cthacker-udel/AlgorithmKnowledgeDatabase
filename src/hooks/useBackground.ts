import type { StaticImageData } from "next/image";
import React from "react";

import { setBackground } from "@/helpers";

/**
 * Sets the background of the page, given an image
 *
 * @param image - The image to set as the background
 */
export const useBackground = (image: StaticImageData): void => {
    React.useEffect(() => {
        if (document !== null) {
            setBackground(document, image);
        }
    }, [image]);
};
