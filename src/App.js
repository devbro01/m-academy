import { Route, Routes } from 'react-router-dom'
import { Scrollbars } from 'rc-scrollbars'

import Home from './pages/home'
import { Navbar } from './components'

const App = () => {
	return (
		<>
			<Scrollbars style={{ width: '100%', height: '100vh' }} autoHide autoHideTimeout={5000} autoHideDuration={200}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Scrollbars>
		</>
	)
}

export default App
