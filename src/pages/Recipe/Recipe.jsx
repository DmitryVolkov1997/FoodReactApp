import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMealById } from '../../api'
import { setRecipe } from '../../store/catalogSlice/catalogSlice'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Loader from '../../components/UI/Loader/Loader'
import './Recipe.css'

const Wrapper = styled.div`
	display: flex;
`
const Card = styled.div`
	box-shadow: -2px 2px 7px 2px rgba(34, 60, 80, 0.2);
	border-radius: 0.7rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	transition: box-shadow 0.22s ease-in-out;
	margin: 3.5rem 0 0 2.5rem;
	max-width: 100%;
`

const Header = styled.div`
	width: 100%;
`
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-position: center;
	object-fit: cover;
`
const CardInfo = styled.div`
	padding: 2rem;
`

const CardTitle = styled.h6`
	color: green;
	font-size: var(--fz-md);
	margin: 1rem 0 1.2rem;
`

const CardText = styled.div`
	line-height: 2rem;
	margin-bottom: 0.5rem;
`

const Recipe = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { recipe } = useSelector(state => state.catalog)

	useEffect(() => {
		getMealById(id).then(({ data }) =>
			dispatch(setRecipe({ data: data.meals[0] }))
		)
	}, [id]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{recipe.idMeal ? (
				<Wrapper>
					<Card>
						<Header>
							<Img src={recipe.strMealThumb} alt={recipe.strMeal} />
						</Header>
						<CardInfo>
							<CardTitle>{recipe.strMeal}</CardTitle>
							<CardText>Категория: {recipe.strCategory}</CardText>
							<CardText>Район: {recipe.strArea}</CardText>
							<CardText>Инструкция: {recipe.strInstructions}</CardText>
							<CardTitle>Видео рецепт</CardTitle>

							<table className='table'>
								<thead>
									<tr>
										<th>Ingredient</th>
										<th>Measure</th>
									</tr>
								</thead>
								<tbody>
									{Object.keys(recipe).map(ingredient => {
										if (
											ingredient.includes('Ingredient') &&
											recipe[ingredient]
										) {
											return (
												<tr key={ingredient}>
													<td>{recipe[ingredient]}</td>
													<td>{recipe[`strMeasure${ingredient.slice(13)}`]}</td>
												</tr>
											)
										}
										return null
									})}
								</tbody>
							</table>

							{recipe.strYoutube ? (
								<iframe
									title={recipe.idMeal}
									width='560'
									height='315'
									src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
										-11
									)}`}
									allowFullScreen
								></iframe>
							) : null}
						</CardInfo>
					</Card>
				</Wrapper>
			) : (
				<Loader />
			)}
		</>
	)
}

export default Recipe
