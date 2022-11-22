import { Col, Row, Skeleton } from "antd";
import ArticleItem from "./ArticleItem"


const ArticleList = ( { articles, isLoading } ) => {
	return(
		<div className="site-card-wrapper">
			<Row>
				{articles.map(article => ( 
					<Col span={24} key={article.id}>
						<Skeleton loading={isLoading} active> 
							<ArticleItem article={article} /> 
						</Skeleton> 
					</Col>))}
			</Row>
		</div>
	);	
}

export default ArticleList;
