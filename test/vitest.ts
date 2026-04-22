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
