// Mock for next/navigation - only what next-transition-router needs
export const useRouter = () => ({
    push: () => {},
    replace: () => {},
    back: () => {},
    forward: () => {},
    refresh: () => {},
    prefetch: () => {},
})

export const usePathname = () => "/"

