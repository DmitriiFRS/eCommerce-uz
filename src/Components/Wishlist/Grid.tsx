"use client";

import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { removeItem } from "@/Functions/utilsFunctions";
import styles from "./Wishlist.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { setWishlistCount } from "@/Redux/Slices/OrderCart.slice";
import { Element } from "../Common/ItemCard/AddToWishlist";
import Empty from "./Empty";

function Grid() {
   const dispatch = useAppDispatch();
   const [wishListItems, setWishlistItem] = useLocalStorage<Element[]>("wishlist", []);

   useEffect(() => {
      dispatch(setWishlistCount(wishListItems.length));
   }, [wishListItems]);
   return wishListItems.length < 1 ? (
      <Empty />
   ) : (
      <div className={styles.grid}>
         {wishListItems.map((el) => {
            return (
               <div key={el.id} className={styles.grid__item}>
                  <button onClick={() => removeItem(el, wishListItems, setWishlistItem)} className={styles.grid__remove}>
                     <IoMdClose />
                  </button>
                  <div className={styles.grid__img}>
                     <Image src={el.img} alt={el.name} fill style={{ objectFit: "contain" }} />
                  </div>
                  <div className={styles.grid__title}>{el.type}</div>
                  <div className={styles.grid__name}>
                     <div>
                        {el.title} {el.model}
                     </div>
                     <div>Бренд: {el.brand}</div>
                  </div>
                  <Link className={styles.grid__btn} href={el.url}>
                     Подробнее
                  </Link>
               </div>
            );
         })}
      </div>
   );
}
export default Grid;
