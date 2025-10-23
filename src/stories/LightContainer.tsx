import { PropsWithChildren } from "react"
import { css } from "@styled-system/css"

export const lightContainerStyles = css({
    padding: "2rem",
    color: "text",
    background: "background",
})

export const LightContainer = ({ children }: PropsWithChildren) => (
    <div className={lightContainerStyles}>{children}</div>
)
