import React from 'react'
import styled from 'styled-components'
import { SiPrestashop } from 'react-icons/si'
import { Container } from '../Container/Container'
import { NavLink } from 'react-router-dom'
import { MdFastfood } from 'react-icons/md'

const HeaderEl = styled.header`
	background: #fff;
	box-shadow: 4px 4px 8px -9px rgba(34, 60, 80, 0.2);
	font-family: var(--family);
`
const Wrapper = styled.div`
	height: 6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& > p {
		font-weight: var(--fw-bold);
		font-size: var(--fz-md);
		font-style: italic;
	}
`

const List = styled.ul`
	display: flex;
	gap: 2rem;
`
const ListItem = styled.li`
	color: #757ca0;
`

const Header = () => {
	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Logo>
						<MdFastfood size='50' />
						<p>Еда</p>
					</Logo>
					<List>
						<ListItem>
							<NavLink to='/home'>Главная</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to='/about'>О нас</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to='/contact'>Контакты</NavLink>
						</ListItem>
					</List>
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}

export default Header
