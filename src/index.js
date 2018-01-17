import store from './redux/store';
import {
  getFruitCount,
  updateFruitStock,
  explainFruitStock
} from './redux/modules/fruit.js';

store.dispatch(getFruitCount());
store.dispatch(updateFruitStock(10));
store.dispatch(explainFruitStock());
