import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'
import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home'
import Recipe from '../../pages/Recipe/Recipe'
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
					<Route path='/category/:name' element={<CategoriesPage />} />
					<Route path='/meal/:id' element={<Recipe />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
