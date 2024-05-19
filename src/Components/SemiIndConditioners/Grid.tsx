import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import { SemiIndDataInner } from "@/app/catalog/col-conditioners/page";
import Sidebar from "./Sidebar/Sidebar";

function Grid({ items, currencyVal, title, type, uri }: { items: SemiIndDataInner[]; currencyVal: number; title: string; type: string; uri: string }) {
   return (
      <section className={styles.aircond__grid}>
         <Sidebar />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list}>
               {items.map((el, index) => {
                  if (el.type === type) return <Item key={index} el={el} currencyVal={currencyVal} title={title} uri={uri} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default Grid;