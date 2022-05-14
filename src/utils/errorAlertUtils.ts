
interface GqlError {
    message: string
    locations: { line: number, column: number }[]
    path: string[]
    extensions: { code: number }
}
export interface ErrorRes {
    graphQLErrors: GqlError[]
    clientErrors: []
    networkError: string
    message: string
}

export const AlertError = (error: ErrorRes) => alert(`${error.graphQLErrors[0].extensions.code} - ${error.message}`)