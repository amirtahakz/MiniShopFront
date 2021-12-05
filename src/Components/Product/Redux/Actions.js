export const ADD_TO_CART = '[Product] ADD_TO_CART';
export const REMOVE_FROM_CART = '[Product] REMOVE_FROM_CART';

export function AddToCart(props){
    return {type:ADD_TO_CART , payload:props};
}
export function RemoveFromCart(props){
    return {type : REMOVE_FROM_CART , payload:props}
}