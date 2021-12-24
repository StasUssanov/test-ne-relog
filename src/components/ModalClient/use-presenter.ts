import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSelectedApp } from '../../store/_app';
import { useEffect, useState } from 'react';
import { IModalFields } from './types';
import { EType } from '../../store/data-base/types';


export const usePresenter = () => {
  const selected = useAppSelector((state) => state.appReducer.selectedApp);
  const apps = useAppSelector((state) => state.dataBaseReducer.apps);
  const clients = useAppSelector((state) => state.dataBaseReducer.clients);
  const dispatch = useAppDispatch();

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ modalFields ~~~ */

  const initModalFields: IModalFields = {
    id: 0,
    name: '',
    phone: '',
    type: EType.PICKUP,
    price: 0,
    coords: '',
  };

  const [modalFields, setModalFields] = useState<IModalFields>(initModalFields);

  useEffect(() => {
    if (selected) {
      const selectedApp = apps.filter(app => app.id === selected.id)[0];
      const clientData = clients.filter(client => client.id === selectedApp.clientId)[0];
      if (selectedApp && clientData) setModalFields({
        id: selectedApp.id,
        name: clientData.name,
        phone: clientData.phone,
        type: selectedApp.type,
        price: selectedApp.price,
        coords: Object.values(selectedApp.coords).join(', '),
      });
    }
  }, [selected]);

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ onCancel ~~~ */

  const onCancel = () => {
    dispatch(setSelectedApp({ selectedApp: null }));
  };

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return {
    isModalVisible: selected !== null,
    modalFields,
    onCancel,
  };
};
