import * as actions from "./actionTypes";

const initialState = [
  
];

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case actions.ADDED:
        return [...state, { msg: payload.item, isDone: false }];
      case actions.REMOVED:
        return state.filter((val, ind) => ind !== payload.indexx);
      case actions.COMPLETED:
        // let pTodo = [...state];
        // let cTodo = state[payload.indexx];
        // if (cTodo.isDone) {
        //     cTodo.isDone = false;
        // } else {
        //     cTodo.isDone = true;
        // }
        // pTodo[payload.check] = cTodo;
        // state = pTodo
        // return state;
        return state.map((todo, index) =>
          index !== payload.indexx ? todo : { ...todo, isDone: !todo.isDone }
        );


      default:
        return state;
    }
}


export default reducer