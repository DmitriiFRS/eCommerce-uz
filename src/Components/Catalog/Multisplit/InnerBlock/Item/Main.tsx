import { MultiInnerMain } from "@/app/catalog/multisplit-inner/page";
import styles from "../../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Params from "./Params";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import Imges from "@/Components/Common/ItemCard/Imges";
import MobileSlider from "@/Components/Common/ItemCard/MobileSlider";
import ListOfModels from "@/Components/Common/ItemCard/ListOfModels";
import MainParams from "@/Components/Common/ItemCard/MainParams";
import Price from "@/Components/Common/ItemCard/Price";
import Buy from "@/Components/Common/ItemCard/Buy";
import Slider from "@/Components/Common/ItemCard/Slider";
import Cheaper from "@/Components/Common/ItemCard/Cheaper";
import IsInStock from "@/Components/Common/ItemCard/IsInStock";

type Props = {
   items: MultiInnerMain[];
   params: {
      item: string;
   };
   dollarValue: number;
};

function Main({ items, params, dollarValue }: Props) {
   console.log(params);
   return (
      <>
         {items.map((el, index) => {
            if (el.multisplitModelCollection.items.find((item) => item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
               {
                  el.multisplitModelCollection.items.sort((a, b) => a.price - b.price);
               }
               return (
                  <section key={index} className={styles.item}>
                     {el.multisplitModelCollection.items.map((el2, index2) => {
                        if (el2.model.replace(/\s|\//g, "-").toLowerCase() === params.item)
                           return (
                              <div key={index2} className={styles.item__grid}>
                                 <div className={styles.item__imgFavorite}>
                                    <AddToWishlistContainer
                                       element={{
                                          img: el.imageCollection.items[0].url,
                                          name: el.name,
                                          model: el2.model,
                                          brand: el.company,
                                          type: "Мульти-сплит внутренние блоки",
                                          title: "Настенный фен",
                                       }}
                                    />
                                    <Slider images={el.imageCollection.items} />
                                    <Imges images={el.imageCollection.items} name={el.name} />
                                    <MobileSlider images={el.imageCollection.items} name={el.name} />
                                 </div>
                                 <div className={styles.item__title}>
                                    <h2>
                                       Внутренний блок мультисплит-система {el.name} {el2.model}
                                    </h2>
                                 </div>
                                 <div className={styles.item__middle}>
                                    <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>Все модели серии {el.name}</h4>
                                    <ListOfModels items={el.multisplitModelCollection.items} url={el.url} index2={index2} />
                                    <MainParams description={el.description}>
                                       <li className={styles.item__mainParams__elem}>
                                          <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                          <span></span>
                                          <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                                       </li>
                                       <li className={styles.item__mainParams__elem}>
                                          <div className={styles.item__mainParams__elemTitle}>Инверторный</div>
                                          <span></span>
                                          <div className={styles.item__mainParams__elemParam}>{el.isInverter ? "Да" : "Нет"}</div>
                                       </li>
                                    </MainParams>
                                 </div>
                                 <div className={styles.item__prices}>
                                    <Price price={el2.price} dollarValue={dollarValue} />
                                    <IsInStock inStock={el2.inStock} />
                                    <Buy
                                       searchTitle={el2.model}
                                       item={{
                                          id: Date.now(),
                                          name: `Мульти-сплит внутренний блок ${el.name}`,
                                          url: el.url,
                                          company: el.company,
                                          image: el.imageCollection.items[0].url,
                                          model: el2.model,
                                          price: el2.price,
                                          count: 1,
                                       }}
                                    />
                                    <Cheaper />
                                    <div className={styles.item__delivery}>Бесплатная доставка по Ташкенту</div>
                                 </div>
                                 <Params el={el} elInner={el2} />
                              </div>
                           );
                     })}
                     <div style={{ display: "flex", gap: "30px" }} key={index}></div>
                  </section>
               );
            }
         })}
      </>
   );
}
export default Main;
