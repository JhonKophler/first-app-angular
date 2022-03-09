export interface Details{
    productId: number,
    quantity:number,
    productName:string,
}

export interface Order{
    id:number,
    name: string,
    date: string,
    shippingAddress:string,
    city:string,
    isDelivery: boolean,
}

export interface DetailsOrders{
    details: Details[],
    orderId: number,
}