// primary green button
const Button = ({ text, background, type = 'button' }) => {
	return (
		<button type={type} className={`btn primary-button ${background && 'highlight'}`}>
			{text}
		</button>
	)
}

export default Button
