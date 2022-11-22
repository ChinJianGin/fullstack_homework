import React, { useState, useEffect } from "react";
import { Badge, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
	LikeOutlined,
} from '@ant-design/icons';
import { toggle } from "../redux/siderSlice";

export default function LikeComponent({like_num}) {
	const dispatch = useDispatch();
	const num = like_num || 0
	return (
		<Badge count={num}>
			<Button type="default" shape="circle" icon = {<LikeOutlined />} size="large" onClick={ () => dispatch(toggle({activate: true, button: 0}))}/>
		</Badge>
	);
}
