const Input = ({ data, setData, label, type, placeholder }) => {
	return (
		<div className='mb-3'>
			<label htmlFor='basic-url' className='form-label'>
				{label}
			</label>
			<input
				placeholder={placeholder}
				type={type}
				className='form form-control'
				value={data}
				onChange={e => {
					setData(e.target.value)
				}}
				required
			/>
		</div>
	)
}
export default Input
