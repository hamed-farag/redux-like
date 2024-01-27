import { actionTypes } from "./actionTypes";

export interface IActionType<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export interface ICounterStore {
  count: number;
}

interface ICount {
  count: number;
}

export type IUpdateCountAction = IActionType<
  typeof actionTypes.UPDATE_COUNT,
  ICount
>;
