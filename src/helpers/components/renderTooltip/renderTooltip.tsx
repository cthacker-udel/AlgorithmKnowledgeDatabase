import React from "react";
import { Tooltip } from "react-bootstrap";
import { type OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import styles from "./renderTooltip.module.css";

/**
 *
 * @param props - The properties passed down from the OverlayTrigger parent
 * @param message - The message to add to the tooltip
 * @param title - The title to add to the tooltip
 * @param footer - The footer to add to the tooltip
 * @param id - The id to add to the tooltip
 * @returns
 */
export const renderTooltip = (
    properties: OverlayInjectedProps,
    message: string,
    title?: string,
    footer?: string,
    id?: string,
): JSX.Element => (
    <Tooltip id={id ?? `${Date.now}`} {...properties}>
        <div className={styles.main_tooltip_content}>
            {title && <div>{title}</div>}
            {message && <div>{message}</div>}
            {footer && <div>{footer}</div>}
        </div>
    </Tooltip>
);
