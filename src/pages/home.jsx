import './pages.css'
// components
import { Button, Contact, CourseCard, ResultCard, Socials, SwiperMain } from '../components'
// images
import { hero, stats1, stats2, stats3 } from '../constants'
import { Link } from 'react-router-dom'
import { getCourse } from '../services/getcourse'
import { useEffect, useState } from 'react'

const Home = () => {
	const [data, setData] = useState([])

	const fetchCourse = async id => {
		const response = await getCourse(id)
		return setData(response.data)
	}

	useEffect(() => {
		fetchCourse()
	}, [])

	// console.log(data)

	return (
		<>
			<div className='hero'>
				<div className='container'>
					<div className='content'>
						<div className='left'>
							<h1 className='hero-text'>
								Освойте профессию будущего с <span className='text-green'>Monday</span>
							</h1>
							<p className='desc'>Актуальные знания от признанных экспертов рынка для новичков и практикующих специалистов</p>
							<div className='buttons'>
								<Button text={'Записаться'} background={true} id='#contact' />
								<Link to={'/page/about'}>
									<Button text={'Почему?'} background={false} />
								</Link>
							</div>
						</div>
						<img className='hero-img' src={hero} alt='hero' />
					</div>
					<div className='hero-image'></div>
				</div>
			</div>
			{/* academy-results */}
			<div className='results-container container'>
				<div className='results'>
					{/* #1 */}
					<ResultCard src={stats1} number={2891} title={'Пройденных занятий'} />

					{/* #2 */}
					<ResultCard src={stats2} number={520} title={'Cтудентов на данный момент'} />

					{/* #3 */}
					<ResultCard src={stats3} number={98} title={'Пройденных мастер классов'} />
				</div>
			</div>
			{/* course cards */}
			<div className='container'>
				<div className='course-cards'>
					<h1>Наши Курсы</h1>
					<div className='course-list'>
						<CourseCard data={data} />
					</div>
				</div>
			</div>
			{/* Swiper Component */}
			<SwiperMain />
			{/* Contact Us */}
			<Contact />
			{/* Footer */}
			<div className='footer'>
				<h2 className='footer-brand'>OOO "Monday Labs"</h2>
				<Socials />
			</div>
		</>
	)
}
export default Home
