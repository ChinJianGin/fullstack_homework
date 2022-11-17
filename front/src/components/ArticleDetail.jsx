import { Col, Row, Skeleton } from "antd";
import Markdown from "markdown-to-jsx";

function ArticleDetail({ article, isLoading}) {
	const header_1 = `#`
	Headers = header_1.concat(` `, article.title)
	return(
		<Row gutter={[32, 32]} className="article-style">
			<Col span={24}>
				<Skeleton loading={isLoading} active>
					<Markdown options={{wrapper: 'article'}}>
					{Headers}
					</Markdown>
				</Skeleton>
			</Col>
			<Col span={24}>
				<Skeleton loading={isLoading} active>
					<Markdown options={{wrapper: 'article'}}>
					{article.author}
					</Markdown>
				</Skeleton>
			</Col>
			<Col span={24}>
				<Skeleton loading={isLoading} active>
					<Markdown options={{wrapper: 'article'}}>
					{article.content}
					</Markdown>
				</Skeleton>
			</Col>
		</Row>
	);
}

export default ArticleDetail
