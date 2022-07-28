import { PropsWithChildren } from 'react'
import styles from '../styles/LaIndent.module.sass'
const {stLaIndent} = styles

interface I_Props extends PropsWithChildren{}

function LaIndent({children}: I_Props) {
	return (
		<div className={stLaIndent}>
			{children}
		</div>
	)
}

export default LaIndent
