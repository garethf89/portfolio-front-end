// eslint-disable-next-line
require("dotenv-flow").config()

exports.data = { name: "Gazmatron1" }
exports.url = `${process.env.GATSBY_REACT_APP_API_URL}/lastFm`
