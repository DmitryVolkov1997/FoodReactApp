import { createSlice } from '@reduxjs/toolkit'

const catalogSlice = createSlice({
	name: 'catalog',
	initialState: {
		catalog: [],
	},
	reducers: {
		setCatalog(state, { payload }) {
			state.catalog = payload.data
		},
	},
})

export const { setCatalog } = catalogSlice.actions
export default catalogSlice.reducer
