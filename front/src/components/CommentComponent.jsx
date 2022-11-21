import React, { useState, useEffect } from "react";
import { Badge, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
	CommentOutlined,
} from '@ant-design/icons';
import { toggle } from "../redux/siderSlice";

export default function CommentComponent() {
	const dispatch = useDispatch();
	return (
		<Badge count={3}>
			<Button type="default" shape="circle" icon={ <CommentOutlined />} size="large" onClick={ () => dispatch(toggle({activate: true, button: 1})) } />
		</Badge>
	);
}
