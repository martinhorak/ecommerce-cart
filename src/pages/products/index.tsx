import Head from 'next/head'
import Header from 'components/Header'
import ProductList from 'components/ProductList'

export default function Products() {
  return (
    <>
      <Head>
        <title>ECommerce - Products</title>
        <meta name="description" content="ECommerce - Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ProductList />

    </>
  )
}
