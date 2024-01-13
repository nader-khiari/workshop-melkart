import products from "../data/products"

export const getProduct = (id)=>{
    return products.find(element => element.id === id)
}

export const getProducts = ()=>{
    return products
}