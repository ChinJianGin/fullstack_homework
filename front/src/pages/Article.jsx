import { Layout } from "antd";
import AppHeader from "../components/Header"
import { useParams } from "react-router-dom";
import ArticleDetail from "../components/ArticleDetail";
import { useArticleById } from "../react-query";


const { Header, Content } = Layout
function Article() {
	const { articleId } = useParams();
	const { data, isLoading } = useArticleById(articleId);
	const article = data || {};

	return(
		<Layout className="">
			<Header
				style={{
					position: 'fixed',
					zIndex: 1,
					width: '100%',
				}}
			>
				<AppHeader title={"Article Detail"}/>
			</Header>
			<Content style={{ 
				height: '720px',
				padding: '100px 480px'}}>
				<ArticleDetail article={article} isLoading={isLoading} />
			</Content>
		</Layout>
	);
}

export default Article;
