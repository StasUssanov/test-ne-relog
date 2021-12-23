import { useAppSelector } from '../../store/hooks';
import { TMarkerSource } from './types';

export const usePresenter = () => {
  const apps = useAppSelector((state) => state.dataBaseReducer.apps);
  const clients = useAppSelector((state) => state.dataBaseReducer.clients);

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ markersSource ~~~ */

  const markersSource: TMarkerSource[] = apps.map(app => {
    const name = clients.filter(client => client.id === app.clientId)[0].name;
    return ({
      id: app.id,
      name,
      price: app.price,
      position: app.coords,
    });
  });

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return {
    markersSource,
  };
};
