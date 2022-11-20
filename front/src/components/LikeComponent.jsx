import React, { useState, useEffect } from "react";
import { Badge, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
	LikeOutlined,
} from '@ant-design/icons';
import { toggle } from "../redux/siderSlice";

export default function LikeComponent() {
	const dispatch = useDispatch();
	return (
		<Badge count={3}>
			<Button type="default" shape="circle" icon = {<LikeOutlined />} size="large" onClick={ () => dispatch(toggle(true))}/>
		</Badge>
	);
}
