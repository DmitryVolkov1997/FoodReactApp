import React from 'react'
import { useEffect } from 'react'
import Loader from '../../components/UI/Loader/Loader'
import styled from 'styled-components'
import { getAllMealCategories } from '../../api'
import { setCatalog } from '../../store/catalogSlice/catalogSlice'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesList from '../../components/CategoriesList/CategoriesList'

const Wrapper = styled.div``

const Home = () => {
	const dispatch = useDispatch()
	const { catalog } = useSelector(state => state.catalog)

	useEffect(() => {
		getAllMealCategories().then(({ data }) =>
			dispatch(setCatalog({ data: data.categories }))
		)
	}, [])

	return (
		<Wrapper>
			{!catalog.length ? <Loader /> : <CategoriesList catalog={catalog} />}
		</Wrapper>
	)
}

export default Home
