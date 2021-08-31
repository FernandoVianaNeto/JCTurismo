import { combineReducers } from "redux";

import { sendDestinyData } from "./destinyDataReducer";
import { shoppingCart } from './carrinhoComprasReducer';

export const rootReducer = combineReducers({
  destinyData: sendDestinyData,
  shoppingItems: shoppingCart
});
