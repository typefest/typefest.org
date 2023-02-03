import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Typefest</title>
        <link rel="me" href="https://mastodon.social/@typefest" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
