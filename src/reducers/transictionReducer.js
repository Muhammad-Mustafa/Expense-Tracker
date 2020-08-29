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

    case "INCOME":
      return {
        ...state,
        income: state.income + action.income,
      };

    case "EXPENSE":
      return {
        ...state,
        expense: state.expense - -action.expense,
      };

    default:
      return state;
  }
};
