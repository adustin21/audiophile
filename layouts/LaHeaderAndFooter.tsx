import { PropsWithChildren } from 'react'
import ArFooter from '../areas/ArFooter'
import ArHeader from '../areas/ArHeader'

interface I_Props extends PropsWithChildren{}

function LaHeaderAndFooter({children}: I_Props) {
	return (
		<>
			<ArHeader />
			<main>
				{children}
			</main>
			<ArFooter />
		</>
	)
}

export default LaHeaderAndFooter
