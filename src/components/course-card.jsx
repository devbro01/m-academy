import Button from './button'

const CourseCard = ({ src, title, desc }) => {
	return (
		<div className='card border-0' style={{ width: '25rem' }}>
			<img className='d-flex mx-auto my-5' src={src} alt='#cap' width={'128px'} />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{desc}</p>
				{/* buttons */}
				<div className='btn-group mx-auto'>
					<Button text={'Записаться'} background={true} />
					<Button text={'Подробнее'} background={false} />
				</div>
			</div>
		</div>
	)
}

export default CourseCard
