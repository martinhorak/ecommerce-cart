import Head from 'next/head'
import Header from 'components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>ECommerce - Home</title>
        <meta name="description" content="ECommerce - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  )
}
