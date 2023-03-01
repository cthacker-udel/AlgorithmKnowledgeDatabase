/* eslint-disable @typescript-eslint/no-base-to-string -- disabled */
import type { StaticImageData } from "next/image";

/**
 *
 * @param _doc - The document instance
 * @param image - The image we are appending
 */
export const setBackground = (
    _document: Document,
    image: StaticImageData,
): void => {
    const body = _document.querySelector("body");
    if (body !== null) {
        body.style.backgroundImage = `url(${image.src})`;
        body.style.backgroundSize = "cover";
        body.style.backgroundBlendMode = "lighten";
        body.style.backgroundColor = "rgba(255, 255, 255, 0.35)";
    }
};
