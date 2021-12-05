import { createStore } from "redux";
import { CartReducer } from "./Reducer";

export const CartStore = createStore(CartReducer);