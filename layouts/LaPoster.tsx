import { PropsWithChildren } from 'react'
import ArPoster from '../areas/ArPoster'
import LaIndent from './LaIndent'

interface I_Props extends PropsWithChildren{}

function LaPoster({children}: I_Props) {
	return (
		<>
			{children}
			<LaIndent>
				<ArPoster />
			</LaIndent>
		</>
	)
}

export default LaPoster
