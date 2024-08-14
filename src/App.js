import { Route, Routes } from 'react-router-dom'
import { Scrollbars } from 'rc-scrollbars'
import 'react-toastify/dist/ReactToastify.css'
// components
import { Navbar } from './components'
import { ToastContainer } from 'react-toastify'
import Home from './pages/home'
// course pages
import Python from './pages/python'
import Design from './pages/design'
import Smm from './pages/smm'
import Frontend from './pages/frontend'
// about us page
import About from './pages/about'
// Layouts design
import './layouts/all-layout.css'

const App = () => {
	return (
		<>
			<Scrollbars style={{ width: '100%', height: '100vh' }} autoHide autoHideTimeout={5000}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/page/about' element={<About />} />
					{/*Courses*/}
					<Route path='/course/frontend' element={<Frontend />} />
					<Route path='/course/python' element={<Python />} />
					<Route path='/course/design' element={<Design />} />
					<Route path='/course/smm' element={<Smm />} />
				</Routes>
				<ToastContainer />
			</Scrollbars>
		</>
	)
}

export default App
