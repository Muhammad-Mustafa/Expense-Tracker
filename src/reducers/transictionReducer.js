import { v4 as uuidv4 } from "uuid";

export const transictionReducer = (state, action) => {
  //   console.log(state, action.items);
  switch (action.type) {
    case "ADD_TRANSICTION":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: uuidv4(),
            text: action.items.text,
            transictionType: action.items.transictionType,
            transiction: action.items.transiction,
          },
        ],
      };
    default:
      return state;
  }
};
