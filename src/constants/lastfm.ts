// eslint-disable-next-line
require("dotenv-flow").config()

exports.data = { name: "DirtyG" }
exports.url = `${process.env.GATSBY_REACT_APP_API_URL}/lastFm`
