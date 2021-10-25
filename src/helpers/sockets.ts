export const httpUrlToWebSockeUrl = (url: string): string => {
    // eslint-disable-next-line no-useless-escape
    return url.replace(/(http)(s)?\:\/\//, "ws$2://")
}
