import { Layout } from "antd";
import AppHeader from "../components/Header"
import ArticleList from "../components/ArticleList";
import { useArticles } from "../react-query";


const { Header, Content } = Layout
function Home() {

	const url = "";
	const { data, isLoading } = useArticles(url);
	const articles = data?.data || []
	const title = url ==="" ? "Article Blog" : articles[0]?.title.toUpperCase();

	return(
		<Layout className="">
			<Header
				style={{
					position: 'fixed',
					zIndex: 1,
					width: '100%',
				}}
			>
				<AppHeader title={title}/>
			</Header>
			<Content style={{ 
				padding: '150px 480px'}}>
				<ArticleList articles={articles} isLoading={isLoading}/>
			</Content>
		</Layout>
	);
}

export default Home;
