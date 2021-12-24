import React from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { usePresenter } from './use-presenter';

const { Item } = Form;
const { Option } = Select;

const ModalClient = (): JSX.Element => {
  const pr = usePresenter();

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return (
    <Modal
      title={`Заявка № ${pr.modalFields.id}`}
      centered
      visible={pr.isModalVisible}
      onCancel={pr.onCancel}
    >
      <Form
        labelCol={{ span: 8 }}
        fields={Object.entries(pr.modalFields).map(([name, value]) => ({ name, value }))}
      >
        <Item
          label="Название клиента"
          name="name"
          children={<Input disabled={true}/>}
        />

        <Item
          label="Контактный номер"
          name="phone"
          children={<Input disabled={true}/>}
        />

        <Item
          label="Тип заявки"
          name="type"
        >
          <Select disabled={true}>
            <Option value="delivery">Доставка</Option>
            <Option value="pickup">Забор</Option>
          </Select>
        </Item>

        <Item
          label="Цена заявки"
          name="price"
          children={<Input disabled={true}/>}
        />

        <Item
          label="Координаты"
          name="coords"
          children={<Input disabled={true}/>}
        />
      </Form>
    </Modal>
  );
};

export default ModalClient;
