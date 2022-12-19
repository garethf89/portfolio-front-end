import { Asset } from "@schema"

export const ImageMock: Omit<Asset, "sys" | "contentfulMetadata"> = {
    title: "Hive HR Promo image",
    url: "https://images.ctfassets.net/z41luxcckja5/1yP8C3CTYfv8KW4CEPuqV2/9fe8311cca7301fc95bbbf23caa76864/BritishAirways.jpg",
    width: 1800,
    height: 1601,
}
