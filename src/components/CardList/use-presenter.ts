import { TDataSource } from './types';
import { useAppSelector } from '../../store/hooks';

export const usePresenter = () => {
  const apps = useAppSelector((state) => state.dataBaseReducer.apps);
  const clients = useAppSelector((state) => state.dataBaseReducer.clients);

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

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return {
    dataSource,
  };
};
