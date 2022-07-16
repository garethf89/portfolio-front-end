import { renderHook } from "@testing-library/react-hooks/dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { useLastFm, useLastFmFunction } from "../lastfm"
import mockAlbums from "../../__mocks__/lastfm"
import { waitFor } from "@testing-library/react"
jest.mock("axios", () => ({
    post: jest.fn().mockImplementation(() => ({
        data: mockAlbums,
    })),
    get: jest.fn().mockImplementation(() => ({
        data: mockAlbums,
    })),
}))

const queryClient = new QueryClient()
const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe("LastFM Service", () => {
    test("Test success of useLastFm hook", async () => {
        const { result } = renderHook(() => useLastFm({}), {
            wrapper,
        })
        await waitFor(() => result.current.status === "success")
        expect(result.current.data).toEqual(mockAlbums)
    })

    test("Test success of useLastFmFunction hook", async () => {
        const { result } = renderHook(() => useLastFmFunction({}), {
            wrapper,
        })
        await waitFor(() => result.current.status === "success")
        expect(result.current.data).toEqual(mockAlbums)
    })
})
