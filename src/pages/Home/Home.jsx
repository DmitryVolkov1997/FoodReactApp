import React from 'react'
import {useEffect} from 'react'
import Loader from '../../components/UI/Loader/Loader'
import styled from 'styled-components'
import {getAllMealCategories} from '../../api'
import {setCatalog} from '../../store/catalogSlice/catalogSlice'
import {useDispatch, useSelector} from 'react-redux'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import Search from '../../components/Search/Search';
import {setFilteredCatalog} from '../../store/catalogSlice/catalogSlice';
import {useLocation, useNavigate} from 'react-router-dom';

const Wrapper = styled.div``

const Home = () => {
    const dispatch = useDispatch()
    const {catalog, filteredCatalog} = useSelector(state => state.catalog)
    const navigate = useNavigate()
    const {pathname, search} = useLocation()

    const handleInput = (str) => {
        if (str) {
            dispatch(setFilteredCatalog({
                data:
                  catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
            }))
        } else {
            dispatch(setFilteredCatalog({data: catalog}))
        }
        navigate(`${pathname}?search=${str}`, {replace: true})
    }

    useEffect(() => {
        getAllMealCategories().then(({data}) =>
          dispatch(setFilteredCatalog({data: search ? data.categories.filter(item => (item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase()))) : data.categories}))
        )
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getAllMealCategories().then(({data}) =>
          dispatch(setCatalog({data: data.categories}))
        )
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
      <Wrapper>
          <Search cb={handleInput}/>
          {!catalog.length ? <Loader/> : <CategoriesList catalog={filteredCatalog}/>}
      </Wrapper>
    )
}

export default Home
