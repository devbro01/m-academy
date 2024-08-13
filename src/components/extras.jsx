const Extras = ({ src, title, desc, reverse }) => {
	return (
		<div className={`my-5 extras-item ${reverse && 'reverse'}`}>
			<img src={src} alt={title} />
			<div className='extras-text'>
				<h1>{title}</h1>
				<p>{desc}</p>
			</div>
		</div>
	)
}
export default Extras
