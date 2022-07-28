import Head from 'next/head'
import ArCategories from '../../areas/ArCategories'
import ArCategoryHeader from '../../areas/ArCategoryHeader'
import ArProductCard from '../../areas/ArProductCard'
import LaHeaderAndFooter from '../../layouts/LaHeaderAndFooter'
import LaIndent from '../../layouts/LaIndent'
import LaPoster from '../../layouts/LaPoster'
import styles from '../../styles/Headphones.module.sass'
const {stheadphones} = styles

interface I_Props{}

function Headphones({}: I_Props) {
	return (
		<>
		<Head>
			<title>Categories</title>
			<meta name="description" content="Enjoy music in the best possible sound with headphones and earphones at the best prices. Shop online and order products with the help of our easy-to-use website." />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<ArCategoryHeader />
		<LaIndent>
			<ArProductCard />
			<ArProductCard />
			<ArProductCard />
			<ArCategories />
		</LaIndent>
		</>
	)
}

Headphones.getLayout = (page: React.ReactNode) => {
  return (
    <LaHeaderAndFooter>
      <LaPoster>
        {page}
      </LaPoster>
    </LaHeaderAndFooter>
  )
}

export default Headphones
