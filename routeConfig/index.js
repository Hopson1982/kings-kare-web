const dev = process.env.NODE_ENV !== 'production'

export const serverAdd = dev ? 'http://localhost:3000' : 'https://kings-kare-web.vercel.app'