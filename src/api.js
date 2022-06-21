import { API_URL } from './config'
import axios from 'axios'

const getMealById = async mealId => {
	return await axios.get(`${API_URL}lookup.php?i=${mealId}`)
}

const getAllMealCategories = async () => {
	return await axios.get(`${API_URL}/categories.php`)
}

const filteredByCategory = async category => {
	return await axios.get(`${API_URL}filter.php?c=${category}`)
}

export { getMealById, getAllMealCategories, filteredByCategory }
