export interface IProduct{
    id: string,
    name: string,
    price: string,
    description: string,
    salePrice: string,
    currentPrice: number,
    finalPrice: number,
    photo: string,
    isNew: boolean,
    isSale: boolean,
    isInStock: boolean,
    inShoppingCart: boolean,
    categories: number,
    quantity: number
}