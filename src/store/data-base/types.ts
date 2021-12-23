export enum EType {
  PICKUP = 'pickup',
  DELIVERY = 'delivery',
}

export type TCoords = {
  lat: number,
  long: number,
}

export type TApps = {
  id: number,
  type: EType,
  price: number,
  coords: TCoords,
  clientId: number,
}

export type TClients = {
  id: number,
  name: string,
  phone: string,
}

export type TDataBaseState = {
  apps: TApps[],
  clients: TClients[],
}
