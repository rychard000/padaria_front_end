import CartActionTypes from "./Action-types"

export const addProductToCart = (payload) =>{
    return {
        type:CartActionTypes.ADD_PRODUCT,
        payload,
    }
}

export const addProductToCartValue = (payload,value) =>{ 
    return {
        type:CartActionTypes.ADD_PRODUCT_VALUE,
        payload,
        value
    }
}

export const removeProduct = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});

export const increaseProductQuantity = (payload) =>({
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
});

export const decreaseProductQuantity = (payload) =>({
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
});

export const removeAllProducts = () =>({
    type: CartActionTypes.REMOVE_ALL_PRODUCTS,
});