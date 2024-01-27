import { useState, useEffect, useMemo, useCallback } from "react";
import { createStore, combineReducers } from "redux";

import { counterReducer } from "./reducer";
import { ICounterStore } from "./types";

const store = createStore(combineReducers({ counterReducer }));

function useStore() {
  const [state, setState] = useState<{ counterReducer: ICounterStore }>(
    store.getState(),
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return unsubscribe;
  }, []);

  // Memoizing the state to prevent unnecessary recalculations
  const memoizedState = useMemo(() => state, [state]);

  // Memoizing the dispatch function
  const memoizedDispatch = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (actionCreator: any) => store.dispatch(actionCreator),
    [],
  );

  return {
    state: memoizedState,
    dispatch: memoizedDispatch,
  };
}

export { useStore };
