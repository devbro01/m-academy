import {Link} from 'react-router-dom'
import {logo} from '../constants'
import './components.css'
import {Button, Socials} from '../components'

const Navbar = () => {
  return (<div className='navbar'>
    <div className='container'>
      <div className='first'>
        <a href='/' className='logo'>
          <img src={logo} alt='logo' height={'35px'}/>
        </a>
        {/* links */}
        <div className='links'>
          <a href='/' className='active-link'>
            Главная
          </a>
          {/* DropDown */}
          <div className="dropdown">
            <a href={"undefined"} className="dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Курсы
            </a>
            <ul className="dropdown-menu">
              <Link className={'dropdown-item'} to={'/course/frontend'}><p>Front End</p></Link>
              <Link className={'dropdown-item'} to={'/course/python'}><p>Python</p></Link>
              <Link className={'dropdown-item'} to={'/course/design'}><p>Design</p></Link>
              <Link className={'dropdown-item'} to={'/course/smm'}><p>SMM</p></Link>
            </ul>
          </div>

          <Link to='/page/about'>
            <a href='/'> Почему Мы? </a>
          </Link>
        </div>
      </div>
      <div className='contact'>
        <Socials/>
        <Button text={'Записаться'} background={false} id='#contact'/>
      </div>
    </div>
  </div>)
}

export default Navbar
