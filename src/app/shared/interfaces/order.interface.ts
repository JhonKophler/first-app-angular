export interface Details{
    id: number,
    orderId: number,
    quantity:number,
    productName:string,
}

export interface Orders{
    id:number,
    name: string,
    date: string,
    shippingAddress:string,
    city:string,
    pickup: boolean,
}