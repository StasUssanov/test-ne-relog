import React from 'react';
import { ICardListProps, usePresenter } from './use-presenter';
import { Card, Table } from 'antd';

export const CardList = (props: ICardListProps): JSX.Element => {
  const pr = usePresenter(props);

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ colunms ~~~ */

  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Название клиента',
    },
    {
      key: 'appType',
      dataIndex: 'appType',
      title: 'Тип заявки',
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: 'Цена заявки',
    },
  ];

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  const dataSource = [
    {
      key: 365115,
      name: 'Research Direct Consulting',
      appType: 'pickup',
      price: 7579,
    },
  ];

  return (
    <Card>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </Card>
  );
};
