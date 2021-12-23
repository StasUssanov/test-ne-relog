import { TCoords } from '../../store/data-base/types';

export type TMarkerSource = {
  id: number,
  name: string,
  price: number,
  position: TCoords,
};
