import Head from 'next/head'
import ArBanner from '../areas/ArBanner'
import ArCategories from '../areas/ArCategories'
import ArProductCard from '../areas/ArProductCard'
import LaHeaderAndFooter from '../layouts/LaHeaderAndFooter'
import LaIndent from '../layouts/LaIndent'
import LaPoster from '../layouts/LaPoster'

interface I_Props{}

function Home({}: I_Props) {
  return (
  <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Enjoy music in the best possible sound with headphones and earphones at the best prices. Shop online and order products with the help of our easy-to-use website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArBanner />
      <LaIndent>
        <ArCategories />
        <ArProductCard />
        <ArProductCard />
        <ArProductCard />
      </LaIndent>
  </>
  )
}

Home.getLayout = (page: React.ReactNode) => {
  return (
    <LaHeaderAndFooter>
      <LaPoster>
        {page}
      </LaPoster>
    </LaHeaderAndFooter>
  )
}

export default Home
