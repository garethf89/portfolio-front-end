type AnimationDef = {
    opacity: number
}

type Animation = {
    name: string
    variants: {
        initial: AnimationDef
        animate: AnimationDef
        exit: AnimationDef
    }
    transition: {
        duration: number
    }
}

export const fadeAnimation: Animation = {
    name: "Fade In/Out",
    variants: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    },
    transition: {
        duration: 0.25,
    },
}
