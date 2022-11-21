import { createSlice } from "@reduxjs/toolkit";


const initialState = { toggleSider: {activate: true, button: -1} };

const siderSlice = createSlice({
	name: 'sider',
	initialState,
	reducers: {
		toggle: (state, action) => {
			if(state.toggleSider.button === action.payload.button){
				state.toggleSider.activate = !state.toggleSider.activate;
			}else{
				state.toggleSider.activate = false;
				state.toggleSider.button = action.payload.button;
			}
		},
	},
});

export const siderState = (state) => state.sider.toggleSider;

export const { toggle } = siderSlice.actions;

export default siderSlice.reducer;
