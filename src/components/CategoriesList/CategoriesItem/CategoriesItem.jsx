import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListItem = styled.li`
	box-shadow: -2px 2px 7px 2px rgba(34, 60, 80, 0.2);
	border-radius: 0.7rem;
	max-width: 26.5rem;
	width: 100%;
	overflow: hidden;
	display: flex;
	transition: box-shadow 0.22s ease-in-out;

	&:hover {
		box-shadow: -2px 2px 7px 8px rgba(34, 60, 80, 0.2);
	}
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const ImgWrapper = styled.div`
	overflow: hidden;
	padding: 0.7rem;
`
const Img = styled.img`
	width: 100%;
	display: block;
	object-fit: cover;
	object-position: center;
`

const CardInfo = styled.div`
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`

const CardTitle = styled.div`
	font-size: var(--fz-md);
	font-weight: var(--fw-medium);
	margin: 1rem 0;
	color: green;
`
const CardDescription = styled.div`
	text-align: justify;
	margin-bottom: 0.5rem;
`
const CardButton = styled.button`
	padding: 1rem;
	background: rgb(0, 160, 220);
	color: #fff;
	font-family: var(--family);
	font-weight: var(--fw-medium);
	font-size: var(--fz-sm);
	border-radius: 0.5rem;
	cursor: pointer;
`

const LinkEl = styled(Link)`
	color: inherit;
	display: flex;
	flex-grow: 1;
`
const CardFooter = styled.div`
	padding: 1.3rem;
`

const CategoriesItem = ({
	idCategory,
	strCategory,
	strCategoryDescription,
	strCategoryThumb,
}) => {
	return (
		<ListItem>
			<LinkEl to={`/catalog/${idCategory}`}>
				<Wrapper>
					<ImgWrapper>
						<Img src={strCategoryThumb} alt={strCategory} />
					</ImgWrapper>
					<CardInfo>
						<CardTitle>{strCategory}</CardTitle>
						<CardDescription>
							{strCategoryDescription.slice(0, 180) + '...'}
						</CardDescription>
					</CardInfo>
					<CardFooter>
						<CardButton>Смотреть категорию</CardButton>
					</CardFooter>
				</Wrapper>
			</LinkEl>
		</ListItem>
	)
}

export default CategoriesItem
