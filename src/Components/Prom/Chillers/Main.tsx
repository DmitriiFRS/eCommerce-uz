import { Chillers } from "@/Components/Catalog/Chillers/Chillers.data";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import ModelList from "./ModelList";
import Params from "./Params";
import PromOrder from "../PromOrder";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import PromImges from "@/Components/Common/ItemCard/PromImges";
import PromMobileSlider from "@/Components/Common/ItemCard/PromMobileSlider";
import Delivery from "@/Components/Common/ItemCard/Delivery";

type Props = {
   outerItems: Chillers;
   params: {
      item: string;
   };
};

function Main({ outerItems, params }: Props) {
   return (
      <>
         {outerItems.map((el, index) => {
            if (el.chillerModel.find((item) => el.url + "_" + item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
               el.chillerModel.sort((a, b) => +a.coolingPower - +b.coolingPower);
            }
            return (
               <section key={index} className={styles.item}>
                  {el.chillerModel.map((el2, index2) => {
                     if (el2.model.replace(/\s|\//g, "-").toLowerCase() === params.item.split("_")[1])
                        return (
                           <div key={index2} className={styles.item__grid}>
                              <div className={styles.item__imgFavorite}>
                                 <AddToWishlistContainer
                                    element={{
                                       img: el.imges[0] as any,
                                       name: el.name,
                                       model: el2.model,
                                       brand: el.company,
                                       type: "Чиллеры",
                                       title: "Чиллер",
                                    }}
                                 />
                                 <PromImges images={el.imges} name={el.name} />
                                 <PromMobileSlider images={el.imges} name={el.name} />
                              </div>
                              <div className={styles.item__title}>
                                 <h2>
                                    {el.name} / {el2.model}
                                 </h2>
                              </div>
                              <div className={styles.item__middle}>
                                 <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>Все модели {el.name}</h4>
                                 <ModelList el={el} index2={index2} />
                                 <div className={styles.item__mainParams}>
                                    <h4 className={`${styles.item__mainParams__title} ${styles.item__h4title}`}>Основные характеристики</h4>
                                    <ul className={styles.item__mainParams__list}>
                                       <li className={styles.item__mainParams__elem}>
                                          <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                          <span></span>
                                          <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                                       </li>
                                    </ul>
                                    <p className={styles.item__description}>{el.description}</p>
                                 </div>
                              </div>
                              <div className={`${styles.item__prices} ${styles.item__prices__prom}`}>
                                 <PromOrder />
                                 <Delivery />
                              </div>
                              <section className={styles.item__params}>
                                 <h3>Все характеристики</h3>
                                 <Params el={el} elInner={el2} />
                              </section>
                           </div>
                        );
                  })}
               </section>
            );
         })}
      </>
   );
}
export default Main;
