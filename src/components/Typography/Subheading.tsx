import { FC, ReactNode } from "react"
import { css, cx, type Styles } from "@styled-system/css"

type SubheadingProps = {
    children: ReactNode
    className?: string
    css?: Styles
    accentLine?: boolean
}

const styles = {
    root: css.raw({
        display: "inline-flex",
        alignItems: "center",
        color: "text",
        marginBottom: "6",
        transition: "color 0.2s ease",
        fontSize: "22px",
        lineHeight: "1.3",
        fontWeight: "200",
    }),

    accentLine: css.raw({
        "&::before": {
            content: '""',
            width: "24px",
            height: "1px",
            background: "linear-gradient(90deg, #7C5CFF 0%, transparent 100%)",
            flexShrink: 0,
        },
    }),
}

export const Subheading: FC<SubheadingProps> = ({
    children,
    className,
    css: cssProp,
    accentLine = false,
}) => {
    return (
        <h2
            className={cx(
                css(
                    styles.root,
                    accentLine && styles.accentLine,
                    cssProp
                ),
                className
            )}
        >
            {children}
        </h2>
    )
}
