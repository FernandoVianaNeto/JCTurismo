import { combineReducers } from 'redux';

import { sendDestinyData } from './destinyDataReducer';
import { shoppingCart } from './carrinhoComprasReducer';
import { sendPackageData } from './packageDataReducer';

export const rootReducer = combineReducers({
  destinyData: sendDestinyData,
  shoppingItems: shoppingCart,
  packageData: sendPackageData,
});
