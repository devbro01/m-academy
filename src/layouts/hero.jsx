import { Button } from '../components'

const Hero = ({ heroTitle, heroImg }) => {
	return (
		<div className='container section-hero'>
			<div className='section-left'>
				<h1 className='mb-5 text-green'>{heroTitle}</h1>
				<Button text={'Записаться'} background={true} id={'#contact'} />
			</div>
			<div className='section-right'>
				<img src={heroImg} alt='hero' />
			</div>
		</div>
	)
}
export default Hero
