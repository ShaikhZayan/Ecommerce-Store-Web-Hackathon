import { ShoppingCart } from "lucide-react"
import { Button } from "./Button"
import { useDispatch } from "react-redux"
import { cartActions } from "@/app/store/Slice/cartSlice"
import { title } from "process";

export default function AddToCart() {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <Button onClick={()=>{dispatch(cartActions.addToCart({quantity:1,}))}} className="flex items-center text-white bg-gray-900 border border-gray-500 px-4 py-2"> <ShoppingCart /> &nbsp; &nbsp; Add to Cart </Button> */}
    </div>
  )
}





