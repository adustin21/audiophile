import styles from '../styles/ArBanner.module.sass'
const {stArBanner} = styles

interface I_Props{}

function ArBanner({}: I_Props) {
	return (
		<div className={stArBanner}>
			ArBanner
		</div>
	)
}

export default ArBanner
