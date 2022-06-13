import MealItem from './MealItem/MealItem'
import styled from 'styled-components'

const List = styled.ul`
	margin-top: 3.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1.3rem;
	justify-content: space-between;
`

const MealsList = ({ meals = [] }) => {
	return (
		<List>
			{meals.map(meal => (
				<MealItem key={meal.idMeal} {...meal} />
			))}
		</List>
	)
}

export default MealsList
