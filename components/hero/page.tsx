"use client"
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import BrandImage1 from "@/public/image.webp";
import BrandImage2 from "@/public/image (2).png";
import BrandImage3 from "@/public/image (3).png";
import BrandImage4 from "@/public/image (4).png";
import HeroImage1 from "@/public/heroimg.png";
import HeroImage2 from "@/public/HeroGirlimg-_1_.png";
import HeroImageSVG from "@/public/HeroGirlimg-_1_.svg";
import HeroImage3 from "@/public/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic.png";
import { Button } from "../ui/Button";
import { ShoppingCart } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"
import { scroll } from "framer-motion/dom";
import { useInView } from "react-intersection-observer";


export default function Hero() {

  const ShoppingText = "Shopping \n Cart";
  
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div>
          <br />
          <br />

        </div>

        <div className="py-5 lg:ml-20 flex flex-col md:flex-row justify-between items-center lg:px-10 px-4">

          <div className="space-y-6 max-w-sm flex-1 md:ml-6 lg:ml-0 lg:mr-10">
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale: 2,
                opacity: 0,
                scrollbarColor: "revert"



              },
              visible: {
                scale: 1,
                x: 5,
                opacity: 1,
                transition: {
                  delay: 0.


                },
              }
            }}>
              <Badge
                id="Badge"
                variant="default"
                aria-label="redirect the user to the sale page"
                className="rounded-[5px] bg-[#e1edff] hover:bg-[#e1edff] text-[18px] text-blue-800 lg:px-5 lg:py-1 px-5 py-2"
              >
                Sale 70%
              </Badge>
            </motion.div>
            <h1 id="HeroPageHeading" className="text-6xl md:text-6xl lg:text-[57px] text-slate-800 font-bold">
              <span>

                An Industrial Take On Streetwear

              </span>
            </h1>
            <p className="text-gray-700 text-lg md:text-lg md:w-80 md:h-24">

              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={75}
                loop={1}
                typeSpeed={75}
                words={[
                  'Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.',
                ]}
              />
            </p>
          
            <Button
              aria-label="redirect the user to the sale page"
              className="flex gap-3 items-center rounded-[5px] text-lg ring-1 bg-[#212121] hover:bg-[#212121] text-white font-semibold py-8 px-4 md:px-6"
            >
           
              <ShoppingCart />
              <p className="whitespace-pre leading-4">
                {ShoppingText}
              </p>
            </Button>

            <div>
              <div className="md:flex flex flex-wrap gap-4">
                <span>
                  <Image className="w-32 md:w-24 lg:w-28 " width={100} height={100} src={BrandImage1} alt="bazaar" />
                </span>
                <span>
                  <Image className="w-32 md:w-24 lg:w-28" width={100} height={100} src={BrandImage2} alt="baztel" />
                </span>
                <div className="md:flex flex flex-wrap gap-4">
                  <span>
                    <Image className="w-32 md:w-24 lg:w-28" width={100} height={100} src={BrandImage3} alt="versase" />
                  </span>
                  <span>
                    <Image className="w-32 md:w-24 lg:w-28" width={100} height={100} src={BrandImage4} alt="in style" />
                  </span>
                </div>
              </div>
            </div>
          </div>



          {/* left side */}
          <div className="hidden md:flex bg-[#ffece3] rounded-full ml-5 lg:-translate-x-16 overflow-ellipsis">
            <div className="-translate-y-4 scale-y-105">
              <motion.div
                initial={{ y: "100%" }} // Initial position (off-screen, below)
                animate={{ y: 0 }} // Final position (on-screen, at the top)
                transition={{ duration: 0.8, ease: "easeInOut" }} // Animation duration and easing
              >
        
                <Image
                  src={HeroImage2} alt="heroimg" width={634} height={630} />
              </motion.div>

            </div>
          </div>
        </div>

      </section>
    </div >

  );
}

// flex-1 sm:object-none lg:max-w-lg lg:w-full lg:-translate-y-3.5 md:w-1/5 w-full px-4 -py-3 flex-shrink-0 hide-on-phone


{/* <div className="hidden md:flex md:w-1/2 lg:w-auto bg-[#ffece3] lg:p-1 md:rounded-full lg:rounded-full overflow-hidden">
  <Image
    width={670}
    height={600}
    className="lg:mt-1 lg:mr-9"
    src={HeroImage2}
    alt="heroimg"
  />
</div> */}

{/* <section className="text-gray-600 body-font">
        <div className="py-5 lg:ml-16 flex flex-col md:flex-row justify-between items-center lg:px-20 px-4">
          right side 
          <div className="space-y-6 max-w-sm flex-1 md:ml-6 lg:ml-0 lg:mr-10">
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale: 2,
                opacity: 0,
                scrollbarColor: "revert"



              },
              visible: {
                scale: 1,
                x: 5,
                opacity: 1,
                transition: {
                  delay: 0.


                },
              }
            }}>
              <Badge
                variant="default"
                aria-label="redirect the user to the sale page"
                className="rounded-[5px] bg-blue-400 hover:bg-blue-300 text-[15px] text-[#ffff] font-bold lg:px-6 lg:py-2 px-6 py-3"
              >
                Sale 70%
              </Badge>
            </motion.div>
            <h1 className="text-6xl md:text-6xl lg:text-6xl text-[#212121] font-bold">
              <span>

                An Industrial Take On Streetwear

              </span>
            </h1>
            <p className="text-gray-700 text-xl md:text-xl md:w-80 md:h-24">

              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={75}
                loop={1}
                typeSpeed={75}
                words={[
                  'Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.',
                ]}
              />
            </p>
            <Button
              aria-label="redirect the user to the sale page"
              className="flex gap-3 items-center rounded-[5px] text-lg ring-1 bg-[#212121] hover:bg-[#212121] text-white font-semibold py-8 px-4 md:px-6"
            >
              <ShoppingCart />
              <p className="whitespace-pre leading-4">
               
              </p>
            </Button>

            <div>
              <div className="md:flex flex flex-wrap gap-4">
                <span>
                  <Image className="w-32 md:w-24 lg:w-28 " width={100} height={100} src={BrandImage1} alt="bazaar" />
                </span>
                <span>
                  <Image className="w-32 md:w-24 lg:w-28" width={100} height={100} src={BrandImage2} alt="baztel" />
                </span>
                <div className="md:flex flex flex-wrap gap-4">
                  <span>
                    <Image className="w-32 md:w-24 lg:w-28" width={100} height={100} src={BrandImage3} alt="versase" />
                </span>
                <span>
                    <Image className="w-32 md:w-24 lg:w-28" width={100} height={100} src={BrandImage4} alt="in style" />
                </span>
                </div>
              </div>
            </div>
          </div>


          left side 


          <div className="hidden md:flex md:w-1/2 md:mr-5 lg:mr-28 lg:h-[550px] sm:h-[450px] bg-blue-100 lg:p-1 sm:rounded-full md:rounded-s-full lg:rounded-full">
            <div>
              <Image
                className="lg:mt-1 lg:-translate-y-16 lg:translate-x-5 lg:w-[700px] sm:-translate-x-5 sm:-translate-y-10 lg:h-[655px] sm:h-[545px] lg:mr-9"
                src={HeroImage2}
                alt="heroimg"
              />
            </div>
          </div>
          
        </div>
        
</section > */}