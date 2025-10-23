import { PropsWithChildren } from "react"
import { css } from "@styled-system/css"

export const darkBackgroundStyles = css({
    padding: "2rem",
    color: "white",
    background: "#222222",
    minHeight: "100vh",
    width: "100%",
})

export const DarkBackground = ({ children }: PropsWithChildren) => (
    <div className={darkBackgroundStyles}>{children}</div>
)
