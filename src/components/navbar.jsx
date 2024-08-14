import { Link } from 'react-router-dom'
import { logo } from '../constants'
import './components.css'
import { Button, Socials } from '../components'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container'>
				<div className='first'>
					<Link to='/' className='logo'>
						<img src={logo} alt='logo' height={'35px'} />
					</Link>
					{/* links */}
					<div className='links'>
						<Link to='/' className='active-link'>
							Главная
						</Link>
						{/* DropDown */}
						<div className='dropdown'>
							<Link className='dropdown-toggle' type='button' data-bs-toggle='dropdown'>
								Курсы
							</Link>
							<ul className='dropdown-menu'>
								<Link className={'dropdown-item'} to={'/course/frontend'}>
									<p>Front End</p>
								</Link>
								<Link className={'dropdown-item'} to={'/course/python'}>
									<p>Python</p>
								</Link>
								<Link className={'dropdown-item'} to={'/course/design'}>
									<p>Design</p>
								</Link>
								<Link className={'dropdown-item'} to={'/course/smm'}>
									<p>SMM</p>
								</Link>
							</ul>
						</div>

						<Link to='/page/about'>Почему Мы?</Link>
					</div>
				</div>
				<div className='contact hide-break'>
					<Socials />
					<div className='hide-break'>
						<Button text={'Записаться'} background={false} id='#contact' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
