import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

vi.mock("lottie-web", () => ({
    default: {
        loadAnimation: vi.fn(() => ({
            play: vi.fn(),
            pause: vi.fn(),
            stop: vi.fn(),
            destroy: vi.fn(),
        })),
    },
}))

vi.mock("next-transition-router", () => ({
    TransitionRouter: ({ children }: { children: React.ReactNode }) => children,
    Link: ({ children, href, ...props }: any) => {
        const React = require("react")
        return React.createElement("a", { href, ...props }, children)
    },
}))
