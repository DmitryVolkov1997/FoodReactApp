import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './catalogSlice/catalogSlice'

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
	},
})
