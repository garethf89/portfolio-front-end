import { css } from "@styled-system/css"

export const OuterWrapper = ({ children, ...props }) => (
    <div
        className={css({
            position: "relative",
            overflow: "hidden",
            bg: "sectionBackground",
            color: "sectionText",
        })}
        {...props}
    >
        {children}
    </div>
)
