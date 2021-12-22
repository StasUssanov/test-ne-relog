import React, { FC } from 'react';
import { Col, Layout, Row } from 'antd';
import { CardList } from './components/CardList';
import { CardMap } from './components/CardMap';

const App: FC = () => (
  <Layout>
    <Layout.Content>
      <Row gutter={8}>
        <Col span={8}>
          <CardList/>
        </Col>
        <Col span={16}>
          <CardMap/>
        </Col>
      </Row>
    </Layout.Content>
  </Layout>
);

export default App;
