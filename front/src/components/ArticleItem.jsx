import { Card } from "antd";
import { Link } from "react-router-dom";

export default function ArticleItem({article}) {
	return(
		<Card>
			<Link to={`/article/${article.id}`}>
				<div>
					<h2>
						{article.title}
					</h2>
					<h6>
						{article.author}
					</h6>
					<p>
						{article.content}
					</p>
				</div>
			</Link>
		</Card>
	);
}
