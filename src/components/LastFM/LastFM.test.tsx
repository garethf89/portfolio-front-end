import LastFM from "./LastFM"
import { render, screen, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider, UseQueryResult } from "react-query"
import mockAlbums from "../../__mocks__/lastfm"
import * as hooks from "../../services/lastfm"
import type {
    LastFMServerResponse,
    LastFMServerResponseFunction,
} from "./types"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("axios")

const queryClient = new QueryClient()

const functionHookMock = {
    data: { data: { album: [...mockAlbums] } },
}

const apiMock = {
    data: mockAlbums,
}

describe("LastFM Component", () => {
    beforeEach(() => {
        vi.spyOn(hooks, "useLastFmFunction").mockReturnValue(
            functionHookMock as unknown as UseQueryResult<
                LastFMServerResponseFunction,
                unknown
            >
        )
        vi.spyOn(hooks, "useLastFm").mockReturnValue(
            apiMock as unknown as UseQueryResult<LastFMServerResponse, unknown>
        )
    })
    afterEach(() => {
        vi.resetAllMocks()
    })
    test("Display nothing if no albums defined", async () => {
        vi.spyOn(hooks, "useLastFmFunction").mockReturnValue({
            data: false,
        } as unknown as UseQueryResult<LastFMServerResponseFunction, unknown>)
        vi.spyOn(hooks, "useLastFm").mockReturnValue({
            data: false,
        } as unknown as UseQueryResult<LastFMServerResponse, unknown>)

        render(
            <QueryClientProvider client={queryClient}>
                <LastFM />
            </QueryClientProvider>
        )
        const albumsList = await screen.queryByText("Recently played")
        expect(albumsList).toBeNull()
    })
    test("Display albums if defaults provided", async () => {
        vi.spyOn(hooks, "useLastFmFunction").mockReturnValue({
            data: false,
        } as unknown as UseQueryResult<LastFMServerResponseFunction, unknown>)
        vi.spyOn(hooks, "useLastFm").mockReturnValue({
            data: false,
        } as unknown as UseQueryResult<LastFMServerResponse, unknown>)
        render(
            <QueryClientProvider client={queryClient}>
                <LastFM initialAlbums={mockAlbums} />
            </QueryClientProvider>
        )
        expect(await screen.findByText("Recently played")).toBeVisible()
        expect(
            await screen.findByTestId(`album-${mockAlbums[0].name}`)
        ).toBeVisible()
        expect(
            await screen.findByTestId(`album-${mockAlbums[1].name}`)
        ).toBeVisible()
        expect(
            await screen.findByTestId(`album-${mockAlbums[2].name}`)
        ).toBeVisible()
    })

    test("Display albums if returned from the Netlify Function hook", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <LastFM initialAlbums={mockAlbums} />
            </QueryClientProvider>
        )

        await screen.findByTestId("lastfm-container")

        expect(await screen.findByText("Recently played")).toBeVisible()
        expect(
            await screen.findByTestId(`album-${mockAlbums[0].name}`)
        ).toBeVisible()
        await expect(
            await screen.findByTestId(`album-${mockAlbums[1].name}`)
        ).toBeVisible()
        expect(
            await screen.findByTestId(`album-${mockAlbums[2].name}`)
        ).toBeVisible()
    })

    test("Display albums if returned from the API hook", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <LastFM initialAlbums={mockAlbums} />
            </QueryClientProvider>
        )
        expect(await screen.findByText("Recently played")).toBeVisible()
        await screen.findByTestId("lastfm-container")

        expect(
            await screen.findByTestId(`album-${mockAlbums[0].name}`)
        ).toBeVisible()
        expect(
            await screen.findByTestId(`album-${mockAlbums[1].name}`)
        ).toBeVisible()
        expect(
            await screen.findByTestId(`album-${mockAlbums[2].name}`)
        ).toBeVisible()
    })
})
