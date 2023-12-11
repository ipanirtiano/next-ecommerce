"use client";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface ContextProps {
  cart: string[];
}

const GlobalContext = createContext({});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // set state cart
  const [cart, setCart] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<Number>();
  // set state order
  const [order, setOrder] = useState<any>([]);

  // get all cart
  const getAllCart = async () => {
    const response = await axios.get("/api/client/cart");
    setCart(response.data.cart);
    return response.data.cart;
  };

  useEffect(() => {
    getAllCart();
  }, [cart]);
  // get total price cart
  useEffect(() => {
    let grantTotalPrice = 0;
    const total = cart?.forEach((item: any) => {
      let calc = item.Products.price * item.amount;
      grantTotalPrice += calc;
    });
    setTotalPrice(grantTotalPrice);
  }, [cart]);

  // get all order
  const getAllOrder = async () => {
    const response = await axios.get("/api/client/order");
    setOrder(response.data.data);
  };
  useEffect(() => {
    getAllOrder();
  }, [order]);

  return (
    <GlobalContext.Provider value={{ cart, order, totalPrice }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
