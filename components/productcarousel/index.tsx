// "use client"
// import { Product } from "../type"
// import { Component, FC, ReactNode } from "react"
// import Card from "../view/card"
// import products from "../mockup"

// const ProductCarousel: FC<{ ProductData: Array<Product> }> = ({ ProductData }) => {
//     let initialX: number;
//     let isDragging = false;
//     let tabBox: any;

//     const isBrowser = () => typeof window !== "undefined";

//     if (isBrowser()) {
//         tabBox = document.querySelector(".scrollGrab");
//     }

//     // Desktop functions
//     function mouseMoves(e: any) {
//         if (!isDragging) return;
//         if (tabBox) {
//             tabBox.scrollLeft -= e.movementX;
//         }
//     };
//     function mouseDown() {
//         isDragging = true;
//     }
//     function mouseUp() {
//         isDragging = false
//     }

//     // mobile functions
//     function mouseMovesForMobile(e: any) {
//         if (!isDragging) return;
//         if (tabBox) {
//             var currentX = e.touches[0].clientX;
//             var movementX = currentX - initialX;
//             tabBox.scrollLeft -= movementX / 5;
//         }
//     };
//     function mouseDownForMobile(e: any) {
//         isDragging = true;
//         initialX = e.touches[0].clientX;
//     };
    
//     let result = products.slice(0, 15);

//     return (
//         <div className="space-y-4">
//             <div className="text-center space-y-3">
//                 <p className="text-blue-800 text-sm">PROMOTIONS</p>
//                 <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
//             </div>
//             <div
//                 onMouseMove={mouseMoves}
//                 onMouseDown={mouseDown}
//                 onMouseUp={mouseUp}
//                 className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4 overflow-y-hidden"
//                 onTouchMove={mouseMovesForMobile}
//                 onTouchStart={mouseDownForMobile}
//                 onTouchEnd={mouseUp}
//             >
//                 {result.map((item: Product, index: number) => (
//                     <Card key={index + 4} ={item} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ProductCarousel