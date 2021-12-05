import { ADD_TO_CART, REMOVE_FROM_CART } from "./Actions";

export function CartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const Product = state.find(
        (item) => item.IdProduct === action.payload.IdProduct
      );
      const Products = state.filter(
        (item) => item.IdProduct !== action.payload.IdProduct
      );

      if (Product) {
        Product.Quantity += 1;
        return [...Products, Product];
      }

      action.payload.Quantity = 1;
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter(
        (item) => item.IdProduct !== action.payload.IdProduct
      );
    default:
      return state;
  }
}
