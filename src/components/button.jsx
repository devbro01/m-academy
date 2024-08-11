// primary green button
const Button = ({ text, background, type = 'button', id = '/' }) => {
	return (
		<button type={type} className={`btn primary-button ${background && 'highlight'}`}>
			<a href={id}>{text}</a>
		</button>
	)
}

export default Button
