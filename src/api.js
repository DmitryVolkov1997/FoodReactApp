import { API_URL } from './config'
import axios from 'axios'

const getMealById = async mealId => {
	const data = await axios
		.get(`${API_URL}lookup.php?i=${mealId}`)
		.then(({ data }) => data)

	return data
}

const getAllMealCategories = async () => {
	const data = await axios.get(`${API_URL}/categories.php`)

	return data
}

const filteredByCategory = async category => {
	return await axios.get(`${API_URL}filter.php?c=${category}`)
}

export { getMealById, getAllMealCategories, filteredByCategory }
