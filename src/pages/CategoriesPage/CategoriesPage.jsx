import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredByCategory } from '../../api'
import { setMeals } from '../../store/catalogSlice/catalogSlice'
import { useParams } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import MealsList from '../../components/MealsList/MealsList'

const CategoriesPage = () => {
	const dispatch = useDispatch()
	const { meals } = useSelector(state => state.catalog)
	const { name } = useParams()

	useEffect(() => {
		filteredByCategory(name).then(({ data }) =>
			dispatch(setMeals({ data: data.meals }))
		)
	}, [name]) // eslint-disable-line react-hooks/exhaustive-deps

	return <div>{!meals.length ? <Loader /> : <MealsList meals={meals} />}</div>
}

export default CategoriesPage
