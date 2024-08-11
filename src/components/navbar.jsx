import { Link } from 'react-router-dom'
import { logo } from '../constants'
import './components.css'
import { Button, Socials } from '../components'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container'>
				<div className='first'>
					<a href='/' className='logo'>
						<img src={logo} alt='logo' height={'35px'} />
					</a>
					{/* links */}
					<div className='links'>
						<a href='/' className='active-link'>
							Главная
						</a>
						<a href='/'> Курсы </a>
						<Link to='/page/about'>
							<a href='/'> Почему Мы? </a>
						</Link>
					</div>
				</div>
				<div className='contact'>
					<Socials />
					<Button text={'Записаться'} background={false} id='#contact' />
				</div>
			</div>
		</div>
	)
}

export default Navbar
