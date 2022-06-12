import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home'
import { Container } from '../Container/Container'
import Header from '../Header/Header'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
