export default {
    API_URL: process.env.REACT_APP_API_URL ?? "localhost",
    API_PORT: process.env.REACT_APP_API_PORT ?? 8081
} as const;