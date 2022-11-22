import { Avatar, Card, Col, Comment, Layout, Row, Skeleton } from "antd";
import AppHeader from "../components/Header"
import { useParams } from "react-router-dom";
import ArticleDetail from "../components/ArticleDetail";
import { useArticleById } from "../react-query";
import { useSelector } from "react-redux";
import { siderState } from "../redux/siderSlice.js";

const { Header, Content, Sider } = Layout
function Article() {
	const toggle = useSelector(siderState);
	const { articleId } = useParams();
	const { data, isLoading } = useArticleById(articleId);
	const article = data || {};
	const article_comment = article.article_comment || []
	const article_like = article.article_like || []
	const button_num = toggle.button
		console.log(button_num)	
	
	const renderContent = (button) => {
		if (button == 0){
			return article_like.map(like => (
					<Col span={24} key={like.id}>
						<Skeleton loading={isLoading} active>
						<Card>
							<Avatar size={40}>{like.author}</Avatar>
							<p>Hello world</p>
						</Card>
						</Skeleton>
					</Col>
					))

		}else{
					return article_comment.map(comment => (
					<Col span={24} key={comment.id}>
						<Skeleton loading={isLoading} active>
						<Card>
							<Comment author={comment.myauthor.author} content={comment.comment} />
						</Card>
						</Skeleton>
					</Col>
					))
		}
	}

	return(
		<Layout className="" style={{
			minHeight: '100vh',
		}}>
			<Sider trigger={null} collapsedWidth={0} width={300} collapsible collapsed={toggle.activate}>
				<Row>
					{renderContent(button_num)}
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
