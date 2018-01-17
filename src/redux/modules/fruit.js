import fruit from '../../inventory';
import { countFruit, stockUp, explain } from '../../helper.js';

const GET_FRUIT_COUNT = 'GET_FRUIT_COUNT';
const UPDATE_FRUIT_STOCK = 'UPDATE_FRUIT_STOCK';
const EXPLAIN_FRUIT_STOCK = 'EXPLAIN_FRUIT_STOCK';

// Action Creators: Function that return an object

export const getFruitCount = () => {
  return {
    type: GET_FRUIT_COUNT
  };
};

export const updateFruitStock = amount => {
  return {
    type: UPDATE_FRUIT_STOCK,
    amount: amount
  };
};

export const explainFruitStock = () => {
  return {
    type: EXPLAIN_FRUIT_STOCK
  };
};

const initialState = {
  inventory: fruit,
  originalList: {},
  currentList: {},
  explained: '',
  counted: false
};

export const fruitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRUIT_COUNT:
      const originalList = countFruit(state.inventory);
      const currentList = Object.keys(state.currentList).length
        ? state.currentList
        : originalList;
      return {
        ...state,
        originalList: originalList,
        currentList: currentList,
        counted: true
      };
    case UPDATE_FRUIT_STOCK:
      originalList = state.count
        ? state.originalList
        : countFruit(state.inventory);
      currentList = Object.keys(state.currentList).length
        ? state.currentList
        : originalList;
      return {
        ...state,
        originalList: originalList,
        currentList: stockUp(state.currentList, action.amount),
        counted: true
      };
    case EXPLAIN_FRUIT_STOCK:
      originalList = state.count
        ? state.originalList
        : countFruit(state.inventory);
      currentList = Object.keys(state.currentList).length
        ? state.currentList
        : originalList;
      const explained = explain(state.currentList);
      return {
        ...state,
        originalList: originalList,
        currentList: currentList,
        counted: true,
        explained: explained
      };
    default:
      return state;
  }
};
