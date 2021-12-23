import { createSlice } from '@reduxjs/toolkit';
import { EType, TApps, TDataBaseState } from './types';
import appsJson from '../__init-data/apps.json';
import clientsJson from '../__init-data/clients.json';

const appsParsed: TApps[] = appsJson.map(i => ({
  id: i.id,
  type: i.type as EType,
  price: i.price,
  coords: i.coords,
  clientId: i.client_id,
}));

const initialState: TDataBaseState = {
  apps: appsParsed,
  clients: clientsJson,
};

export const dataBaseSlice = createSlice({
  name: 'dataBase',
  initialState,
  reducers: {
    //
  },
});

// export const {} = dataBaseSlice.actions;
export default dataBaseSlice.reducer;
