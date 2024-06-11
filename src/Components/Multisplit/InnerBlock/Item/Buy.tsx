"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { useEffect, useState } from "react";
import Loader from "@/Components/Utilities/Loader";
import { MultiInnerDataModel, MultiInnerMain } from "@/app/catalog/multisplit-inner/page";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import ItemInCart from "@/Components/Common/ItemInCart";

type Props = {
   el: MultiInnerMain;
   el2: MultiInnerDataModel;
};

type Item = {
   id: number;
   name: string;
   url: string;
   company: string;
   image: string;
   model: string;
   price: number | null;
   wifiPrice: number | null;
   count: number;
};

function Buy({ el, el2 }: Props) {
   const [items, setItem] = useLocalStorage<Item[]>("cart", []);
   const [activeItem, setActiveItem] = useState<null | Item>(null);
   const [isLoading, setLoading] = useState(true);
   const dispatch = useAppDispatch();
   function addToCart() {
      const item = {
         id: Date.now(),
         name: `Настенный фен мульти-сплит системы ${el.name}`,
         url: el.url,
         company: el.company,
         image: el.imageCollection.items[0].url,
         model: el2.model,
         price: el2.price,
         wifiPrice: null,
         count: 1,
      };
      setItem([...items, item]);
   }
   useEffect(() => {
      dispatch(setItemsCount(items.length));
      if (items.some((item) => item.model === el2.model)) {
         items.some((item) => {
            if (item.model === el2.model) setActiveItem(item);
         });
      } else {
         setActiveItem(null);
         setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [items]);

   useEffect(() => {
      const temp = items.slice();
      if (activeItem) {
         items.forEach((item, idx) => {
            if (item.model === activeItem.model) {
               temp[idx].count = activeItem.count;
            }
         });
         setItem(temp);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [activeItem?.count]);
   return isLoading ? (
      <Loader />
   ) : items && activeItem ? (
      <ItemInCart activeItem={activeItem} setActiveItem={setActiveItem} />
   ) : (
      <button onClick={addToCart} className={styles.item__buy}>
         Добавить в корзину
      </button>
   );
}
export default Buy;
