import './pages.css'
import { Button, CourseCard, Input, ResultCard, Socials, SwiperMain } from '../components'
import { advanced_design, FooterImg, hero, python, react, smm, stats1, stats2, stats3 } from '../constants'
import { useState } from 'react'
import axios from 'axios'
// react-toastify
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('+998 ')
	const [course, setCourse] = useState('')

	const handleSubmitForm = async event => {
		event.preventDefault()

		const token = '7257311692:AAHwBW6Zq8-E3rrtBtZDE0KYdqOv24JouZw'
		const chatID = '5425612601'
		const message = `
			🌟 🇾​​🇦​​🇳​​🇬​​🇮​ ​🇫​​🇴​​🇾​​🇩​​🇦​​🇱​​🇦​​🇳​​🇺​​🇻​​🇨​​🇭​​🇮​ ​🇭​​🇦​​🇧​​🇦​​🇷​​🇮​ 🌟

			👤 ​🇮​​🇸​​🇲​ ​🇫​​🇦​​🇲​​🇮​​🇱​​🇮​​🇾​​🇦​: ${name}
			📞 ​🇹​​🇪​​🇱​​🇪​​🇫​​🇴​​🇳​: ${phone}
			📘 ​🇰​​🇺​​🇷​​🇸​ ​🇳​​🇴​​🇲​​🇮​: ${course}
		`

		try {
			await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
				chat_id: chatID,
				text: message,
			})

			toast.success('Спасибо за отправку!', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Bounce,
			})

			// Clear form fields
			setName('')
			setPhone('+998 ')
			setCourse('')
		} catch {
			toast.error('Ошибка сервера!', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Bounce,
			})
		}
	}

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
								<Button text={'Записаться'} background={true} />
								<Button text={'Почему?'} background={false} />
							</div>
						</div>
						<div className='hero-image'>
							<img className='hero-img' src={hero} alt='hero' />
						</div>
					</div>
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
						/>
						<CourseCard
							src={smm}
							title={'Цифровой маркетинг и SMM'}
							desc={'Хотели бы работать в сфере IT и быть уверенными в своем будущем, но вас не интересует программирование ...'}
						/>
						<CourseCard
							src={python}
							title={'Профессиональный курс по Python'}
							desc={'Программирование - одна из самых востребованных и высокооплачиваемых профессий на сегодняшний день...'}
						/>
						<CourseCard
							src={advanced_design}
							title={'Профессиональный курс по графическому дизайну'}
							desc={'Дизайнер - одна изперспективных профессий, на которые точно стоит обратить внимание...'}
						/>
					</div>
				</div>
			</div>
			{/* Slider Component */}
			{/* TODO: TIP: Give an object to swipper as child prop */}
			<SwiperMain />
			{/* Contact Us */}
			<div className='cotact-us container'>
				<h1 className='contact-title'>Запишитесь к нам на курсы</h1>
				<p className='contact-desc'>Время стать лучше, запишитесь к нам на курсы прямо сейчас</p>

				<div className='groups'>
					<div className='group-left'>
						<p>Не любите формы? Напишите или позвоните нам</p>
						<Socials />
						<img className='my-3' src={FooterImg} alt='footer' />
					</div>
					<div className='group-right mb-5'>
						{/* FIXME: telegram not respond check inbox bot https://t.me/monday_academy_inbox_uz_bot */}
						<form
							onSubmit={e => {
								handleSubmitForm(e)
							}}
						>
							<Input data={name} setData={setName} label={'Полное имя'} type={'text'} placeholder={'Mr Beast...'} />
							<Input data={phone} setData={setPhone} label={'Номер телефона'} type={'text'} />
							<Input data={course} setData={setCourse} label={'Курс'} type={'text'} placeholder={'Front End...'} />
							<Button text={'Submit ✔'} background={true} type={'submit'} />
						</form>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className='footer'>
				<h2 className='footer-brand'>OOO "Monday Labs"</h2>
				<Socials />
			</div>

			<ToastContainer />
		</>
	)
}
export default Home
