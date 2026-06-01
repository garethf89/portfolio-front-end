import { css } from "@styled-system/css"

export const OuterWrapper = ({ children, offsetBg = false, ...props }) => (
    <div
        className={css({
            position: "relative",
            overflow: "hidden",
            bg: offsetBg ? "offsetSectionBackground" : "sectionBackground",
            color: "sectionText",
            transition: "background .5s ease-in-out",
        })}
        {...props}
    >
        {children}
    </div>
)
