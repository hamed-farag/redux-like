import { actionTypes } from "./actionTypes";
import { IUpdateCountAction } from "./types";

import { createAction } from "./base";

export function setCount(count: number): IUpdateCountAction {
  return createAction(actionTypes.UPDATE_COUNT, { count });
}
