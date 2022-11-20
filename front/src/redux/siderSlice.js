import { createSlice } from "@reduxjs/toolkit";


const initialState = { toggleSider: false };

const siderSlice = createSlice({
	name: 'sider',
	initialState,
	reducers: {
		toggle: (state, action) => {
			if(action.payload === true){
				state.toggleSider = !state.toggleSider;
			}
		},
	},
});

export const siderState = (state) => state.sider.toggleSider;

export const { toggle } = siderSlice.actions;

export default siderSlice.reducer;
