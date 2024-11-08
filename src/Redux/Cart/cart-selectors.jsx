export const selectProductCount = (rootReducer) =>{
    return rootReducer.cartReducer.products.reduce((acc, product) =>{
        return parseFloat(acc + product.quantity)
    },0)
}

export const selectProductsTotalPrice = (rootReducer) =>{
    return rootReducer.cartReducer.products.reduce((acc, product) =>{
        return acc + product.preco * product.quantity
    },0)
}

//1 - Os selectors são funções que recebem o estado global como argumento e retornam uma parte específica do estado.
//2 - Para isso so chamar const nomeDaVariavel = useSelector(selectProductCount) => por exemplo
//3 - Os selectors acessam a parte específica do estado que lhes interessa e acessam o reducer que querem para pegar algo neles