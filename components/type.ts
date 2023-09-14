import { StaticImageData } from "next/image"

export type Product = {
  
    id?:number,
    name:string,
    price:string,
    alttext:string,
    category?:string,
    image:string | StaticImageData,
    prodtitle:string,
    brandname:string,
    desc:string,


}

// export type Cart = {
//     Cartid:number,
//     Cartname:string,
//     Cartprice:string,
//     Cartcategory?:string,
//     Cartimage: string | StaticImageData,
//     Cartprodtitle:string,
//     Cartbrandname:string,
//     Cartuuid:number | string | undefined,

// }