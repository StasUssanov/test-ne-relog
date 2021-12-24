import { EType } from '../../store/data-base/types';

export interface IModalFields {
  id: number;
  name: string;
  phone: string;
  type: EType;
  price: number;
  coords: string;
}
