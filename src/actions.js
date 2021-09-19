import { ADDED, COMPLETED , REMOVED } from "./actionTypes";


export function Added(item) {
    return {
        type: ADDED,
        payload: {
            item
        }
    }
}

export function Removed(indexx) {
  return    {
                  type: COMPLETED,
                  payload: {
                    indexx
                  }
                }
}

export function Completed(indexx) {
  return {
    type: REMOVED,
    payload: {
      indexx,
    },
  };
}
