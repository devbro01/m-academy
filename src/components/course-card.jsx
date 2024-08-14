import Button from './button'

const CourseCard = ({ data }) => {
	return data.map(item => {
		const imageUrl = item.attributes.image.data.attributes.url
		const fullImageUrl = 'http://localhost:1337' + imageUrl

		return (
			<div className='card border-0' style={{ width: '25rem' }}>
				<img className='d-flex mx-auto my-5' src={fullImageUrl} alt='#cap' width={'128px'} />
				<div className='card-body'>
					<h5 className='card-title'>{item.attributes.title}</h5>
					<p className='card-text'>{item.attributes.description}</p>
					{/* buttons */}
					<div className='d-flex gap-1 mx-auto'>
						<span>
							<Button text={'Записаться'} background={true} id='#contact' />
						</span>
						<Button text={'Подробнее'} background={false} />
					</div>
				</div>
			</div>
		)
	})
}

export default CourseCard
