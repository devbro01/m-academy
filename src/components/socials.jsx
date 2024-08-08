import { facebook, instagram, telegram } from '../constants'

const Socials = () => {
	return (
		<div className='socials'>
			<a href='https://telegram.org'>
				<img src={telegram} alt='link' />
			</a>
			<a href='https://telegram.org'>
				<img src={instagram} alt='link' />
			</a>
			<a href='https://telegram.org'>
				<img src={facebook} alt='link' />
			</a>
		</div>
	)
}
export default Socials
