const ResultCard = ({ src, number, title }) => {
	return (
		<div className='result-card'>
			<div className='card-content'>
				<div className='media-left'>
					<div className='image'>
						<img src={src} alt={number} />
					</div>
				</div>
				<div className='media-content'>
					<h3 className='numbers'>{number}</h3>
					<p className='title-card'>{title}</p>
				</div>
			</div>
		</div>
	)
}
export default ResultCard
