import { produce } from "immer";

import { actionTypes } from "./actionTypes";
import { ICounterStore, IUpdateCountAction } from "./types";

const initialState: ICounterStore = {
  count: 0,
};

type TAction = IUpdateCountAction;

export const counterReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case actionTypes.UPDATE_COUNT: {
      return produce(state, (draft) => {
        draft.count = action.payload!.count;
      });
    }

    default: {
      return state;
    }
  }
};
