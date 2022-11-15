import { Card, Col, Row } from "antd";

const { Meta } = Card


const ArticleList = ( { articles } ) => {
	return(
		<div className="site-card-wrapper">
    <Row>
      <Col span={24}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={24}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={24}>
        <Card title="Card title" bordered={false}>
			<Meta title='Test' description='Hello world' />
        </Card>
      </Col>
      <Col span={24}>
        <Card title="Card title" bordered={false}>
			<Meta title='Test' description='Hello world' />
        </Card>
      </Col>
    </Row>
  </div>
	);	
}

export default ArticleList;
