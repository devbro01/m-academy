const StudentWorks = ({ works }) => {
	return (
		<div className='container'>
			<h1 className='primary-color text-center my-3'>Работа Наших учеников</h1>
			<div className='works-wrapper'>
				{works.map(item => (
					<div className='work-card' key={item.id}>
						<div className='work-image' style={{ backgroundImage: `url(${item.image})` }} />
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
export default StudentWorks
