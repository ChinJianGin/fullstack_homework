import { Layout } from "antd";
import AppHeader from "../components/Header"
import ArticleList from "../components/ArticleList";


const { Header, Content } = Layout
function Article() {
	return(
		<Layout className="">
			<Header
				style={{
					position: 'fixed',
					zIndex: 1,
					width: '100%',
				}}
			>
				<AppHeader title={"Article"}/>
			</Header>
			<Content style={{ 
				height: '720px',
				padding: '100px 480px'}}>
				<ArticleList />
			</Content>
		</Layout>
	);
}

export default Article;
