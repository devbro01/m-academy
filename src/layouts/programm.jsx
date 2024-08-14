import { Button } from '../components'

const Programm = ({ programm }) => {
	return (
		<div className='programm-wrapper'>
			<div className='container'>
				<h1 className='my-5 text-center'>Программа обучения</h1>
				<div className='programm-cards'>
					{programm.map(item => (
						<div className='programm-card' key={item.id}>
							<img src={item.src} alt='course' height={50} />
							<h1 className='my-4'>{item.title}</h1>
							<p>{item.description}</p>
						</div>
					))}
				</div>
				<div className='mt-5 text-center'>
					<Button text={'Записаться'} background={true} id={'#contact'} />
				</div>
			</div>
		</div>
	)
}
export default Programm
