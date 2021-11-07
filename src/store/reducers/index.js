import { combineReducers } from 'redux';

import { shoppingCart } from './carrinhoComprasReducer';
import { sendPackageData } from './packageDataReducer';

export const rootReducer = combineReducers({
  shoppingItems: shoppingCart,
  packageData: sendPackageData,
});
