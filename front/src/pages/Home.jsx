import { Layout } from "antd";
import AppHeader from "../components/Header"
import ArticleList from "../components/ArticleList";


const { Header, Content } = Layout
function Home() {

	const url = "";

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
				padding: '150px 480px'}}>
				<ArticleList />
			</Content>
		</Layout>
	);
}

export default Home;
