"use client";

import React from "react";
import { useCartSelector } from "@/redux/hooks";
import {
  selectCartItems,
  selectIsCartOpen,
  showOrHideCart,
} from "@/redux/reducer/cartSlice";
import CartItem from "@/components/cart/CartItem";
import { useDispatch } from "react-redux";
import backImage from "../../assets/Back.svg";
import CartControlBlock from "@/components/cart/CartControlBlock";
import Image from "next/image";

function Cart() {
  const dispatch = useDispatch();
  const isCartOpen = useCartSelector(selectIsCartOpen);
  const cartItems = useCartSelector(selectCartItems);
  console.log(isCartOpen);
  return (
    <section
      className={`w-full rounded-t-2xl bg-cart-bg h-full fixed bottom-0 pt-16  px-6  z-50   transition-all duration-300 
    ${isCartOpen ? "translate-y-0" : "translate-y-full pointer-events-none"}
  `}
    >
      <div className='h-[325px] rounded-xl flex flex-col gap-2  overflow-y-auto custom-scroll'>
        {cartItems.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </div>
      <button
        className='p-2 text-lg absolute left-5 flex  items-center top-2.5'
        onClick={() => dispatch(showOrHideCart(false))}
      >
        <div className='rounded-full shadow bg-accent hover:shadow-lg transition-shadow duration-300 text-main-text flex justify-center items-center w-8 h-8 transform -translate-x-1/2 '>
          <Image src={backImage} alt='back' />
        </div>
        Back to menu
      </button>

      <div className='rounded-t-xl p-8 z-10 left-0 bottom-0 absolute w-full h-[40%] bg-card-bg'>
        <button className='bg-accent text-main-text shadow text-xl px-8 py-6 w-full rounded-xl hover:shadow-lg transition-shadow duration-300'>
          Make an order
        </button>
      </div>
    </section>
  );
}

export default Cart;
