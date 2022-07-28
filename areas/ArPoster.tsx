import { PropsWithChildren } from 'react'
import styles from '../styles/ArPoster.module.sass'
const {stArPoster} = styles;

interface I_Props {}

function ArPoster({}: I_Props) {
	return (
		<div className={stArPoster}>
			ArPoster
		</div>
	)
}

export default ArPoster
