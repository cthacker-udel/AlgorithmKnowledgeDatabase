import React, { type ReactNode } from "react";

import styles from "./Layout.module.css";

type LayoutProperties = {
    children: ReactNode;
    customLayoutStyle?: string;
};

/**
 * General layout component, makes the general styling reusable and configurable for certain situations
 * rather then having to define the same styles over and over again, making a component handle that work.
 *
 * @param props - The properties of the Layout component
 * @param props.children - The component that is being wrapped by the Layout component
 */
export const Layout = ({
    children,
    customLayoutStyle,
}: LayoutProperties): JSX.Element => (
    <div className={`${styles.layout_} ${customLayoutStyle ?? ""}`}>
        {children}
    </div>
);
