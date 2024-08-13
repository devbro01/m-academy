import { Bounce, toast } from 'react-toastify'
import { Button, Input, Socials } from './'
import { FooterImg } from '../constants'
import axios from 'axios'
import { useState } from 'react'

const Contact = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('+998 ')
	const [course, setCourse] = useState('')

	const handleSubmitForm = async event => {
		event.preventDefault()

		const token = '7257311692:AAHwBW6Zq8-E3rrtBtZDE0KYdqOv24JouZw'
		const chatID = '5425612601'
		const chatID2 = '7294480566'
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

		try {
			await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
				chat_id: chatID2,
				text: message,
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='cotact-us container' id='contact'>
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
						<Input data={name} setData={setName} label={'Полное имя'} type={'text'} placeholder={'Name...'} />
						<Input data={phone} setData={setPhone} label={'Номер телефона'} type={'text'} />
						<Input data={course} setData={setCourse} label={'Курс'} type={'text'} placeholder={'Front End...'} />
						<button type='submit' className={`btn primary-button highlight`}>
							Submit ✔
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
export default Contact
