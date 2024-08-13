import {Route, Routes} from 'react-router-dom'
import {Scrollbars} from 'rc-scrollbars'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home'
import {Navbar} from './components'
import About from './pages/about'
import {ToastContainer} from 'react-toastify'
import Python from "./pages/python";
import Design from "./pages/design";
import Smm from "./pages/smm";
import Frontend from "./pages/frontend";

const App = () => {
  return (<>
    <Scrollbars style={{width: '100%', height: '100vh'}} autoHide autoHideTimeout={5000} autoHideDuration={200}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page/about' element={<About/>}/>
        {/*Courses*/}
        <Route path='/course/frontend' element={<Frontend/>}/>
        <Route path='/course/python' element={<Python/>}/>
        <Route path='/course/design' element={<Design/>}/>
        <Route path='/course/smm' element={<Smm/>}/>
      </Routes>
      <ToastContainer/>
    </Scrollbars>
  </>)
}

export default App
