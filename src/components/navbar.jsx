import { logo } from '../constants'
import './components.css'
import { Button, Socials } from '../components'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container'>
				<div className='first'>
					<a href='index.html' className='logo'>
						<img src={logo} alt='logo' height={'35px'} />
					</a>
					{/* links */}
					<div className='links'>
						<a href='index.html' className='active-link'>
							Главная
						</a>
						<a href='index.html'> Курсы </a>
						<a href='index.html'> Почему Мы? </a>
					</div>
				</div>
				<div className='contact'>
					<Socials />
					<Button text={'Записаться'} background={false} />
				</div>
			</div>
		</div>
	)
}

export default Navbar
