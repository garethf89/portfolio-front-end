import { renderHook, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import mockAlbums from "../../__mocks__/lastfm"
import { describe, expect, test, vi } from "vitest"

// Mock axios before importing the service
vi.mock("axios", () => ({
    default: {
        post: vi.fn().mockResolvedValue({
            data: mockAlbums,
        }),
        get: vi.fn().mockResolvedValue({
            data: {
                data: {
                    album: mockAlbums,
                },
            },
        }),
    },
    post: vi.fn().mockResolvedValue({
        data: mockAlbums,
    }),
    get: vi.fn().mockResolvedValue({
        data: {
            data: {
                album: mockAlbums,
            },
        },
    }),
}))

import { useLastFm, useLastFmFunction } from "../lastfm"

const queryClient = new QueryClient()
const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe("LastFM Service", () => {
    test("Test success of useLastFm hook", async () => {
        const { result } = renderHook(() => useLastFm({}), {
            wrapper,
        })

        await waitFor(() => {
            expect(result.current.status).toBe("success")
        })

        expect(result.current.data).toEqual(mockAlbums)
    })

    test("Test success of useLastFmFunction hook", async () => {
        const { result } = renderHook(() => useLastFmFunction({}), {
            wrapper,
        })

        await waitFor(() => {
            expect(result.current.status).toBe("success")
        })

        expect(result.current.data).toEqual(mockAlbums)
    })
})
