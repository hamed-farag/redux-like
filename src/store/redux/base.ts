import { IActionType } from "./types";

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): IActionType<T, P> {
  return { type, payload };
}
