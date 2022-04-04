import memoize from "lodash/memoize"

export const supportsWebP = memoize(() => {
    if (typeof document === `undefined`) {
        // No browser
        return true
    }

    const elem =
        typeof document === "object" ? document.createElement("canvas") : false

    if (!elem) {
        return false
    }

    const support =
        elem.toDataURL("image/webp").indexOf("data:image/webp") === 0

    return support
})
