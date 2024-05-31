"use client";

import { sidemenu } from "./Header.data";
import styles from "./Header.module.scss";
import { GrNext } from "react-icons/gr";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Menu({ isSticky }: { isSticky: boolean }) {
   const [activeItem, setActiveItem] = useState(sidemenu[0]);
   function toggleActiveElement(index: number) {
      setActiveItem(sidemenu[index]);
   }
   return (
      <div className={`${styles.menu} ${isSticky ? styles.menu__sticky : ""}`}>
         <div className={styles.menu__grid}>
            <ul className={styles.menu__sidebar}>
               {sidemenu.map((el, index) => {
                  return (
                     <li onMouseEnter={() => toggleActiveElement(index)} key={el.id} className={styles.menu__sidebar__item}>
                        <Image src={el.icon} alt={el.title} width={50} height={50} />
                        <div className={styles.menu__sidebar__title}>{el.title}</div>
                        <GrNext />
                     </li>
                  );
               })}
            </ul>
            <div className={styles.menu__main}>
               <div className={styles.menu__main__title}>{activeItem.title}</div>
               <div className={styles.menu__main__body}>
                  {activeItem.content.body.map((el, index) => {
                     return (
                        <Link href={el.href} key={index}>
                           {el.title}
                        </Link>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}
export default Menu;
