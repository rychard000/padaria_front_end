import CartActionTypes from "./Action-types"

const initialState ={
    products:[],
    productsTotalPrice:0
}

export default function CartReducer(state = initialState, action){
    if(action.type === CartActionTypes.ADD_PRODUCT){
        // return{
        //     ...state,
        //     products:[...state.products, action.payload]
        // }
        const productsIsAlreadyInCart = state.products.some(product=>{
            return product.id === action.payload.id
        })

        if(productsIsAlreadyInCart){
            return {...state,
                products: state.products.map(product =>
                    product.id === action.payload.id 
                    ? {...product, quantity:product.quantity + 1}
                    : product
                )
            }
        }

        return {...state, products:[...state.products,{...action.payload, quantity:1}]}

    }else if(action.type === CartActionTypes.REMOVE_PRODUCT){

        return{
            ...state,
            products: state.products.filter(product=> product.id !== action.payload.id)
        }
        
    }else if(action.type === CartActionTypes.INCREASE_PRODUCT_QUANTITY){
        return{
            ...state,
            products: state.products.map(product=>
                product.id === action.payload.id
                ? {...product, quantity : product.quantity + 1}
                : product
            )
        }
    }else if(action.type === CartActionTypes.DECREASE_PRODUCT_QUANTITY){
        return{
            ...state,
            products: state.products.map(product=>
                product.id === action.payload.id
                ? {...product, quantity:product.quantity - 1}
                : product
            ).filter(product=> product.quantity > 0)
        }
    }else if(action.type === CartActionTypes.REMOVE_ALL_PRODUCTS){
        return{
            products:[]
        }
    }else{
        return state; 
    }
}

// import CartActionTypes from "./Action-types"

// const initialState ={
//     products:[],
//     productsTotalPrice:0
// }

// export default function CartReducer(state = initialState, action){
//     if(action.type === CartActionTypes.ADD_PRODUCT){
//         // return{
//         //     ...state,
//         //     products:[...state.products, action.payload]
//         // }
//         const productsIsAlreadyInCart = state.products.some(product=>{
//             return product.titulo === action.payload.titulo
//         })

//         if(productsIsAlreadyInCart){
//             return {...state,
//                 products: state.products.map(product =>
//                     product.img === action.payload.img 
//                     ? {...product, quantity:product.quantity + 1}
//                     : product
//                 )
//             }
//         }

//         return {...state, products:[...state.products,{...action.payload, quantity:1}]}

//     }else if(action.type === CartActionTypes.REMOVE_PRODUCT){

//         return{
//             ...state,
//             products: state.products.filter(product=> product.img !== action.payload)
//         }
        
//     }else if(action.type === CartActionTypes.INCREASE_PRODUCT_QUANTITY){
//         return{
//             ...state,
//             products: state.products.map(product=>
//                 product.id === action.payload.id
//                 ? {...product, quantity : product.quantity + 1}
//                 : product
//             )
//         }
//     }else if(action.type === CartActionTypes.DECREASE_PRODUCT_QUANTITY){
//         return{
//             ...state,
//             products: state.products.map(product=>
//                 product.id === action.payload.id
//                 ? {...product, quantity:product.quantity - 1}
//                 : product
//             ).filter(product=> product.quantity > 0)
//         }
//     }else if(action.type === CartActionTypes.REMOVE_ALL_PRODUCTS){
//         return{
//             products:[]
//         }
//     }else{
//         return state; 
//     }
// }