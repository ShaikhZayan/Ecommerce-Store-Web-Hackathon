
import Image from "next/image"
import { Button } from "../ui/Button"
import Link from "next/link"
import jewelleryimage from "@/public/feature.webp"

const Jewellery = () => {
    const productDetail = [
        {
            title: "Using Good Quality Materials",
        },
        {
            title: "100% Handmade Products",
        },
        {
            title: "Modern Fashion Design",
        },
        {
            title: "Discount for Bulk Orders",
        },
    ];
    return (
        <div className="flex flex-wrap justify-center mt-20 m-24 scale-105">
            <section className="mt-36  mx-auto pb-28  ">
                <div className="flex justify-center lg:justify-end ">
                    <h2 className="text-[#212121] text-3xl text-center md:text-5xl leading-tight max-w-xl md:text-left font-bold tracking-wider ">
                        Unique and Authentic Vintage Designer Jewellery
                    </h2>
                </div>
                {/* Start here */}

                <div className="mt-12 grid-cols-1 gap-x-6 grid lg:grid-cols-2">
                    {/* left */}
                    <div className="grid grid-cols-1 gap-x-6  md:grid-cols-2 justify-center items-center relative">
                        <div className="max-w-sm tracking-widest absolute opacity-[.07] z-10 font-extrabold mx-auto hidden md:text-8xl md:block text-[#212121]">
                            Different from others
                        </div>
                        {productDetail.map((item) => (
                            <div key={item.title}>
                                <div className="z-20" >
                                    <h4 style={{ fontFamily: 'Sora' }} className="font-bold text-center tracking-widest text-[#212121] py-4">
                                        {item.title}
                                    </h4>
                                    <p className="text-md tracking-widest font-medium text-center text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5 lg:mt-0 mt-10 mx-auto items-center  md:flex-row ">
                        <div className=" flex-shrink-0 ">
                            <Image
                                alt="feature"
                                width={300}
                                height={350}
                                className="w-300 h-350 flex-shrink-0 flex justify-center"
                                src={jewelleryimage}
                            />
                        </div>
                        <div className="text-center">
                            <p className="h-60 font-medium text-gray-500 tracking-widest">
                                This piece is ethically crafted in our small family-owned workshop
                                in Peru with unmatched attention to detail and care. The Natural
                                color is the actual natural color of the fiber, undyed and 100%
                                traceable.
                            </p>
                            <div className="">
                                <Link href={"/products"}>
                                    <Button style={{ fontFamily: 'Sora' }} variant={"jewellery"} className="p-3 h-auto tracking-wide font-semibold zero:p-4 zero:px-5 zero:text-xl  scroll-m-20 zero:tracking-wide bg-[#212121]  text-white lg:w-2/4 lg:py-2  hover:bg-[#212121] lg:text-sm">
                                        See All Products
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};




export default Jewellery