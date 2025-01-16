import { ComponentProps, PropsWithChildren, ReactElement } from "react"
import { css } from "@styled-system/css"

export const FormError = ({
    children,
    ...props
}: PropsWithChildren<ComponentProps<"span">>): ReactElement => {
    return (
        <span
            {...props}
            className={css({
                color: "error",
                marginTop: "3",
                display: "block",
            })}
        >
            {children}
        </span>
    )
}
