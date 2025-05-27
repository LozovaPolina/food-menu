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
import { currencyFormatter } from "@/helpers/fromatter";

function Cart() {
  const dispatch = useDispatch();
  const isCartOpen = useCartSelector(selectIsCartOpen);
  const cartItems = useCartSelector(selectCartItems);

  const totalPrice = cartItems.reduce(
    (prev, cur) => cur.price * cur.quantity + prev,
    0
  );
  console.log(isCartOpen);
  return (
    <section
      className={`w-full rounded-t-2xl bg-cart-bg h-full fixed bottom-0 pt-16  px-6  z-50   transition-all duration-300 
    ${isCartOpen ? "translate-y-0" : "translate-y-full pointer-events-none"}
  `}
    >
      <div className='h-[325px] rounded-xl  flex flex-col gap-2  overflow-y-auto custom-scroll'>
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

      <div className='rounded-t-xl border border-border  flex flex-col gap-4  p-4 z-10 left-0 bottom-0 absolute w-full h-[44%] bg-card-bg'>
        <div className=' bg-card-bg text-main-text p-6 rounded-xl shadow-lg'>
          <label
            htmlFor='promo'
            className='block mb-2 text-sm font-semibold text-text'
          >
            Got a Promo Code?
          </label>

          <div className='flex items-center w-full gap-2'>
            <input
              id='promo'
              type='text'
              placeholder='FOODIE20'
              className='flex-1 text-main px-4 border-border bg-body-bg-color py-2 border rounded-md text-sm focus:outline-none focus:ring-0 focus:border-border'
            />
          </div>
        </div>

        <div className='rounded-xl w-full text-xl p-4 text-main-text bg-border flex  justify-between'>
          <h3 className='text-2xl'>Total Amount</h3>
          <p className='text-price-tag'>
            {currencyFormatter.format(totalPrice)}
          </p>
        </div>

        <button className='bg-accent text-main-text shadow text-xl px-8 py-4 w-full rounded-xl hover:shadow-lg transition-shadow duration-300'>
          Make an order
        </button>
      </div>
    </section>
  );
}

export default Cart;
