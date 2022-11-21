import { Card, Col, Comment, Layout, Row } from "antd";
import { useState } from "react"
import AppHeader from "../components/Header"
import { useParams } from "react-router-dom";
import ArticleDetail from "../components/ArticleDetail";
import { useArticleById } from "../react-query";
import { useDispatch, useSelector } from "react-redux";
import { siderState } from "../redux/siderSlice.js";

const { Header, Content, Sider } = Layout
function Article() {
	const toggle = useSelector(siderState);
	const { articleId } = useParams();
	const { data, isLoading } = useArticleById(articleId);
	const article = data || {};

	return(
		<Layout className="" style={{
			minHeight: '100vh',
		}}>
			<Sider trigger={null} collapsedWidth={0} width={300} collapsible collapsed={toggle.activate}>
				<Row>
					<Col span={24}>
						<Card>
							<Comment content={<p>Hello world.fdaofujdohgoeivhgnfiuoedhfgvisdsgfvjdhgsiu</p>} />
		</Card>
					</Col>
				</Row>
			</Sider>
			<Layout className="site-layout">
				<Header
					style={{
						position: 'fixed',
						width: '100%',
					}}
				>
					<AppHeader title={"Article Detail"}/>
				</Header>
				<Content style={{ 
					height: '720px',
					padding: '100px 480px',
				}}>
					<ArticleDetail article={article} isLoading={isLoading} />
				</Content>
			</Layout>
		</Layout>
	);
}

export default Article;
