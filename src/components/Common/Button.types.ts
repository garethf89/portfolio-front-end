export type ButtonObjectProps = {
    variant?: string
    header?: boolean
}

export type ButtonTypes = "Download" | "Arrow"

export type ButtonVariants = "primary" | "secondary"

export type ButtonBaseProps = {
    icon?: ButtonTypes
    type?: "button" | "submit" | "reset"
    children: React.ReactElement | string
    color?: string
    header?: boolean
    disabled?: boolean
    click?: () => void
    href?: string
    variant?: ButtonVariants
    download?: boolean
}

export type ButtonProps =
    | ({ as?: "button" } & ButtonBaseProps &
          React.ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: "a" } & ButtonBaseProps &
          React.AnchorHTMLAttributes<HTMLAnchorElement>)
