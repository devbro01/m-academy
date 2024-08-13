import './pages.css'
// components
import { Button, Contact, CourseCard, ResultCard, Socials, SwiperMain } from '../components'
// images
import { advanced_design, hero, python, react, smm, stats1, stats2, stats3 } from '../constants'

const Home = () => {
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
								<Button text={'Почему?'} background={false} />
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
						<CourseCard
							src={react}
							title={'Профессиональный курс по Front-End разработке'}
							desc={'Если вы хотите делать интересный дизайн мобильных приложений, сайтов, а так же научиться работать ...'}
							// setCourse={setCourse}
						/>
						<CourseCard
							src={smm}
							title={'Цифровой маркетинг и SMM'}
							desc={'Хотели бы работать в сфере IT и быть уверенными в своем будущем, но вас не интересует программирование ...'}
							// setCourse={setCourse}
						/>
						<CourseCard
							src={python}
							title={'Профессиональный курс по Python'}
							desc={'Программирование - одна из самых востребованных и высокооплачиваемых профессий на сегодняшний день...'}
							// setCourse={setCourse}
						/>
						<CourseCard
							src={advanced_design}
							title={'Профессиональный курс по графическому дизайну'}
							desc={'Дизайнер - одна изперспективных профессий, на которые точно стоит обратить внимание...'}
							// setCourse={setCourse}
						/>
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
