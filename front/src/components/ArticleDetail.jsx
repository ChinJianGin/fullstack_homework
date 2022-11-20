import { Col, Row, Skeleton } from "antd";
import Markdown from "markdown-to-jsx";
import LikeComponent from "./LikeComponent";
import CommentComponent from "./CommentComponent";

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
			<Col span={2}>
				<LikeComponent />
			</Col>
			<Col span={2}>
				<CommentComponent />
			</Col>
		</Row>
	);
}

export default ArticleDetail
