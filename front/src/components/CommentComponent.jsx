import React, { useState, useEffect } from "react";
import { Badge, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
	CommentOutlined,
} from '@ant-design/icons';
import { toggle } from "../redux/siderSlice";

export default function CommentComponent({comment_nums}) {
	const dispatch = useDispatch();
	const num = comment_nums || 0
	return (
		<Badge count={num}>
			<Button type="default" shape="circle" icon={ <CommentOutlined />} size="large" onClick={ () => dispatch(toggle({activate: true, button: 1})) } />
		</Badge>
	);
}
