import {createSlice} from '@reduxjs/toolkit'

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        catalog: [],
        meals: [],
        recipe: [],
        search: '',
        filteredCatalog: []
    },
    reducers: {
        setCatalog(state, {payload}) {
            state.catalog = payload.data
        },
        setMeals(state, {payload}) {
            state.meals = payload.data
        },
        setRecipe(state, {payload}) {
            state.recipe = payload.data
        },
        setSearch(state, {payload}) {
            state.search = payload.search
        },
        setFilteredCatalog(state, {payload}) {
            state.filteredCatalog = payload.data
        }
    },
})

export const {setCatalog, setMeals, setRecipe, setSearch, setFilteredCatalog} = catalogSlice.actions
export default catalogSlice.reducer
