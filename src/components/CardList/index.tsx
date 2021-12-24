import React, { useState } from 'react';
import { usePresenter } from './use-presenter';
import './styles.scss';
import { Card, Table, Tag } from 'antd';
import { useVT } from 'virtualizedtableforantd4';
import ResizeObserver, { SizeInfo } from 'rc-resize-observer';
import { EType } from '../../store/data-base/types';
import { TDataSource } from './types';

const CardList = (): JSX.Element => {
  const pr = usePresenter();

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ tagRender ~~~ */

  const tagRender = (type: EType) => {
    const title = type === EType.DELIVERY ? 'ДОСТАВКА' : 'ЗАБОР';
    const color = type === EType.DELIVERY ? 'geekblue' : 'green';

    return (
      <Tag
        color={color}
        children={title}
      />
    );
  };

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
      render: (appType: EType) => tagRender(appType),
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

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ onRow ~~~ */

  const onRow = ({ id }: TDataSource, index?: number) => ({
    onClick: () => pr.onSelectClient(id, index ?? 0),
  });

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
        pagination={false}
        onRow={onRow}
        rowClassName="card-list__row"
      />
    </Card>
  );
};

export default CardList;
