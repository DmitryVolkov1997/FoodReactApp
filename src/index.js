import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import Layout from './components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<App />
				</Layout>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
