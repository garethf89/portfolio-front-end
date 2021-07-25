export const httpUrlToWebSockeUrl = url => {
    return url.replace(/(http)(s)?\:\/\//, "ws$2://")
}
