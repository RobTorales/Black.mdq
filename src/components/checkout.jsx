import React, { useContext } from 'react'
import { CheckoutForm } from "./checkoutform";
import { useState } from 'react';
import { CartContext } from '../context/cartcontext';
import { collection,  addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

export const CheckOut = () => {

  const [orderId, setOrderId] = useState('')

  const {cart, total, clearCart} = useContext(CartContext)

  const createOrder = async ({ nombre, phone, email}) => {
    
      const order = {
        buyer: {
          nombre, phone, email
        },
        items: cart,
        total: total,
      }

      const db = getFirestore();

      const ordersCollection = collection (db, "orders");
      
      const orderAdded = await addDoc(ordersCollection, order)
      
      setOrderId(orderAdded.id)
      clearCart()

      if (orderId){
        return <h3>el id de su orden es:{orderId}</h3>
      }

      
  }
  

  
  return (
    <div>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
  )
}

export default CheckOut;