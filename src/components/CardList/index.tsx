import React, { useState } from 'react';
import { usePresenter } from './use-presenter';
import './styles.scss';
import { Card, Table } from 'antd';
import { useVT } from 'virtualizedtableforantd4';
import ResizeObserver, { SizeInfo } from 'rc-resize-observer';

const CardList = (): JSX.Element => {
  const pr = usePresenter();

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ columns ~~~ */

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

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ scroll ~~~ */

  const [scroll, setScroll] = useState<{ y: number }>({ y: 1000 });

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ onResize ~~~ */

  const onResize = ({ height }: SizeInfo) => {
    const headerHeight = document?.getElementsByClassName('ant-table-header')[0].clientHeight ?? 0;
    setScroll({ y: height - headerHeight });
  };

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ hook ~ tableComponents ~~~ */

  const [tableComponents] = useVT(() => ({ scroll }), []);

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return (
    <Card className="card-list">
      <ResizeObserver
        onResize={onResize}
        children={<div style={{ width: 0, height: '100%' }}/>}
      />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={pr.dataSource}
        components={tableComponents}
        scroll={scroll}
        size="small"
        pagination={false}
      />
    </Card>
  );
};

export default CardList;
