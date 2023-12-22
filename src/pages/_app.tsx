import '@/styles/globals.css'
import { MantineProvider, darken } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider>
            <Component {...pageProps} />
        </MantineProvider>
    )
}