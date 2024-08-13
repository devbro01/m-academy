import { instagram, telegram } from '../constants'

const TeacherCard = ({ image, name, job, desc, teleg, insta }) => {
	return (
		<div className='teacher-card m-2'>
			<img src={image} alt={name} height={150} className='my-auto' />
			<div className='p-2'>
				<div className='teacher-name'>{name}</div>
				<p className='teacher-job'>{job}</p>
				<p className='teacher-desc'>{desc}</p>
				<div className='d-flex gap-3'>
					<a href={teleg}>
						<img src={telegram} alt='tg' />
					</a>
					<a href={insta}>
						<img src={instagram} alt='insta' />
					</a>
				</div>
			</div>
		</div>
	)
}
export default TeacherCard
