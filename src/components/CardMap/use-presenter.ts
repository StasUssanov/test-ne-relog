import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TMarkerSource } from './types';
import { setSelectedApp } from '../../store/_app';

export const usePresenter = () => {
  const apps = useAppSelector((state) => state.dataBaseReducer.apps);
  const clients = useAppSelector((state) => state.dataBaseReducer.clients);
  const dispatch = useAppDispatch();

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

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ onSelectClient ~~~ */

  const onSelectClient = (id: number, index: number) => {
    dispatch(setSelectedApp({ selectedApp: { id, index } }));
  };

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return {
    markersSource,
    onSelectClient,
  };
};
