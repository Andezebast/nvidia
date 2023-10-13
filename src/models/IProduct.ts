export interface IProduct{
    id: string,
    name: string,
    price: string,
    description: string,
    salePrice: string,
    sumPrice: string,
    photo: string,
    isNew: boolean,
    isSale: boolean,
    isInStock: boolean,
    inShoppingCart: boolean,
    categories: number,
    quantity: number
}