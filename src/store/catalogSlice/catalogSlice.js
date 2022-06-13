import { createSlice } from '@reduxjs/toolkit'

const catalogSlice = createSlice({
	name: 'catalog',
	initialState: {
		catalog: [],
		meals: [],
	},
	reducers: {
		setCatalog(state, { payload }) {
			state.catalog = payload.data
		},
		setMeals(state, { payload }) {
			state.meals = payload.data
		},
	},
})

export const { setCatalog, setMeals } = catalogSlice.actions
export default catalogSlice.reducer
