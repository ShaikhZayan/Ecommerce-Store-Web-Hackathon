import { Product } from "./type";
import img from '@/public/420x260.png'
import img1 from '@/public/2465.jpg'
import img2 from '@/public/product-page-01-related-product-01.jpg'
import image from "next/dist/client/image";
import productimg1 from '@/public/product1.png'
import productimg2 from '@/public/product2.png'
import productimg3 from '@/public/product3.png'
import productimg4 from '@/public/product4.png'
import productimg5 from '@/public/product5.png'
import productimg6 from '@/public/product6.png'
import productimg7 from '@/public/product7.png'
import productimg8 from '@/public/product8.png'
import productimg9 from '@/public/product9.png'
import productimg10 from '@/public/product10.png'
import productimg11 from '@/public/product11.png'

const products: Product[] = [
    {
        id: 1,
        name: "Brushed Raglan Sweatshirt",
        price: 234.0,
        alttext: "Product",
        category: "Male",
        prodtitle: "Brushed Raglan Sweatshirt",
        brandname: "Dine Marketplace",
        desc: `Fam locavore kickstarter distillery. Mixtape chillwave tumeric.`,
        image: productimg1

    },
    {
        id: 2,
        name: "Brushed Raglan Sweatshirt",
        category: "Female",
        alttext: "Product",
        price: 564.0,
        prodtitle: "Brushed Raglan Sweatshirt",
        brandname: "Dine Marketplace",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg2

    },
    {
        id: 3,
        name: "Flex Sweatshirt",
        category: "Male",
        price: 648.0,
        alttext: "Product",
        prodtitle: "Flex Sweatshirt",
        brandname: "Dine Marketplace",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg3

    },
    {
        id: 4,
        name: "Flex Sweatpants",
        category: "Female",
        price: 748.0,
        prodtitle: "Flex Sweatpants",
        alttext: "Product",
        brandname: "Dine Marketplace",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg4

    },
    {
        id: 5,
        name: "Pink Fleece Sweatpants",
        category: "Kidz",
        price: 458.0,
        prodtitle: "Pink Fleece Sweatpants",
        alttext: "Product",
        brandname: "Dine Marketplace",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg5

    },
    {
        id: 6,
        name: "Pink Fleece Sweatpants",
        category: "Kidz",
        price: 876.0,
        prodtitle: "Pink Fleece Sweatpants",
        brandname: "Dine Marketplace",
        alttext: "Product",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg6

    },
    {
        id: 7,
        name: "Imperial Alpaca Hoodie",
        category: "Kidz",
        price: 656.0,
        prodtitle: "Imperial Alpaca Hoodie",
        brandname: "Dine Marketplace",
        alttext: "Product",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg7

    },
    {
        id: 8,
        name: "Flex Push Button Bomber",
        category: "Kidz",
        price: 766.0,
        prodtitle: "Flex Push Button Bomber",
        brandname: "Dine Marketplace",
        alttext: "Product",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg8

    },
    {
        id: 9,
        name: "Muscle Tank",
        category: "Kidz",
        price: 785.0,
        prodtitle: "Muscle Tank",
        brandname: "Dine Marketplace",
        alttext: "Product",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg9

    },
    {
        id: 10,
        name: "Brushed Bomber",
        category: "Kidz",
        price: 576.0,
        prodtitle: "Brushed Bomber",
        brandname: "Dine Marketplace",
        alttext: "Product",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg10

    },
    {
        id: 11,
        name: "Raglan Sweatshirt",
        category: "Kidz",
        price: 355.0,
        prodtitle: "Raglan Sweatshirt",
        brandname: "Dine Marketplace",
        alttext: "Product",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: productimg11

    },

];
export default products;