import { Route, Routes } from 'react-router-dom'
import { Scrollbars } from 'rc-scrollbars'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home'
import { Navbar } from './components'
import About from './pages/about'
import { ToastContainer } from 'react-toastify'

const App = () => {
	return (
		<>
			<Scrollbars style={{ width: '100%', height: '100vh' }} autoHide autoHideTimeout={5000} autoHideDuration={200}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/page/about' element={<About />} />
				</Routes>
				<ToastContainer />
			</Scrollbars>
		</>
	)
}

export default App
