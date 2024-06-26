import { FancoilsInner } from "../Catalog/Fancoils/Fancoils.data";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import { VRFInner } from "../Catalog/VrfOuter/VrfOuter.data";
import { VRFInnerBody } from "../Catalog/VrfInner/VrfInner.data";
import { ChillersInner } from "../Catalog/Chillers/Chillers.data";
import { AtomInner } from "@/Data/atomOuter.data";
import { AtomIInner } from "@/Data/atomInner.data";

function Item({
   el,
   title,
   uri,
   model,
}: {
   el: FancoilsInner | VRFInner | VRFInnerBody | ChillersInner | AtomInner | AtomIInner;
   title: string;
   uri: string;
   model: string;
}) {
   return (
      <Link href={`${uri}/${el.url}_${model}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imges[0]} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>{title}</h5>
               <h3 className={`${styles.aircond__item__name} ${styles.aircond__item__nameProm}`}>{el.name}</h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Бренд: <span>{el.company}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={`${styles.aircond__item__side} ${styles.aircond__item__side2}`}>
            <div className={`${styles.aircond__item__btn} ${styles.aircond__item__btnProm}`}>
               <span>Подробнее</span>
            </div>
         </div>
      </Link>
   );
}
export default Item;
