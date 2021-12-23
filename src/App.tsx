import React, { FC, lazy, Suspense } from 'react';
import { Col, Layout, Row, Space, Spin, Typography } from 'antd';

const CardList = lazy(() => import('./components/CardList'));
const CardMap = lazy(() => import('./components/CardMap'));

const Loader: FC = () => (
  <div className="loader">
    <Space>
      <Spin size="large"/>
      <Typography.Title
        level={3}
        children="Загрузка"
      />
    </Space>
  </div>
);

const App: FC = () => (
  <Layout>
    <Layout.Content>
      <Suspense fallback={<Loader/>}>
        <Row gutter={8}>
          <Col span={8}>
            <CardList/>
          </Col>
          <Col span={16}>
            <CardMap/>
          </Col>
        </Row>
      </Suspense>
    </Layout.Content>
  </Layout>
);

export default App;
