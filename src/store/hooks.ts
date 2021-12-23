import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TRootState, TAppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
