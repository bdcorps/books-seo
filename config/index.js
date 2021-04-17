const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? "https://url.com" : 'http://localhost:3000'