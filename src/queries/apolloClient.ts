import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const errorLink = onError(
    ({ graphQLErrors, networkError, operation, response }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message }) => {
                return console.error(
                    new Error(
                        `GraphQL error :${JSON.stringify(response)} at ${
                            operation.operationName
                        }, Message: ${message}`
                    )
                )
            })
        }

        if (networkError) {
            console.error(new Error(`[Network error]: ${networkError}`))
        }
        console.error(new Error(`[Network error]: ${networkError}`))
    }
)

const httpLink = new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`,
    headers: {
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Language": "en-US",
    },
})

export const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
})
