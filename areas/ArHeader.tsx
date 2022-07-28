import styles from '../styles/ArHeader.module.sass'
const {stArHeader} = styles

interface I_Props{}

function ArHeader({}: I_Props) {
	return (
		<header className={stArHeader}>
			ArHeader
		</header>
	)
}

export default ArHeader
