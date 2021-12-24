import { TDataSource } from './types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSelectedApp } from '../../store/_app';

export const usePresenter = () => {
  const apps = useAppSelector((state) => state.dataBaseReducer.apps);
  const clients = useAppSelector((state) => state.dataBaseReducer.clients);
  const dispatch = useAppDispatch();

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ dataSource ~~~ */

  const dataSource: TDataSource[] = apps.map(app => {
    const name = clients.filter(client => client.id === app.clientId)[0].name;
    return ({
      id: app.id,
      name,
      appType: app.type,
      price: app.price,
    });
  });

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ onSelectClient ~~~ */

  const onSelectClient = (id: number, index: number) => {
    dispatch(setSelectedApp({ selectedApp: { id, index } }));
  };

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return {
    dataSource,
    onSelectClient,
  };
};
