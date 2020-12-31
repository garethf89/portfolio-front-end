export type Procedure = (...args: string[]) => void

export type Options = {
    isImmediate: boolean
}

export interface DebouncedFunction<F extends Procedure> {
    (this: ThisParameterType<F>, ...args: Parameters<F>): void
    cancel: () => void
}

export default <F extends Procedure>(
    func: F,
    waitMilliseconds = 50,
    options: Options = {
        isImmediate: false,
    }
): DebouncedFunction<F> => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const debouncedFunction = (...args: Parameters<F>) => {
        const doLater = () => {
            timeoutId = undefined
            if (!options.isImmediate) {
                func.apply(this, args)
            }
        }

        const shouldCallNow = options.isImmediate && timeoutId === undefined

        if (timeoutId !== undefined) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(doLater, waitMilliseconds)

        if (shouldCallNow) {
            func.apply(this, args)
        }
    }

    debouncedFunction.cancel = () => {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId)
        }
    }

    return debouncedFunction
}
