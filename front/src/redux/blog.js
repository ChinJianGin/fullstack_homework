import { configureStore } from "@reduxjs/toolkit";
import siderSlice from "./siderSlice";

const blog = configureStore({
	reducer: {
		sider: siderSlice,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export default blog;
