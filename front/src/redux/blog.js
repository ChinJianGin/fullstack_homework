import { configureStore } from "@reduxjs/toolkit";
import articleSlice from './articleSlice';

const blog = configureStore({
	reducer: {
		article: articleSlice,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export default blog;
