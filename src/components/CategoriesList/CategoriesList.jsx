import React from 'react'
import styled from 'styled-components'
import CategoriesItem from './CategoriesItem/CategoriesItem'

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;
	margin-top: 4rem;
`

const CategoriesList = ({ catalog = [] }) => {
	return (
		<List>
			{catalog.map(el => {
				return <CategoriesItem key={el.idCategory} {...el} />
			})}
		</List>
	)
}

export default CategoriesList
