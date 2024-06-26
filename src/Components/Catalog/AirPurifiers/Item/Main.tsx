import Imges from "@/Components/Common/ItemCard/Imges";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import MobileSlider from "@/Components/Common/ItemCard/MobileSlider";
import { AirPurifiersCollection } from "@/app/catalog/air-purifiers/page";
import Price from "@/Components/Common/ItemCard/Price";
import Params from "./Params";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import MainParams from "@/Components/Common/ItemCard/MainParams";
import Buy2 from "@/Components/Common/ItemCard/Buy2";
import Slider from "@/Components/Common/ItemCard/Slider";
import IsInStock from "@/Components/Common/ItemCard/IsInStock";
import Cheaper from "@/Components/Common/ItemCard/Cheaper";

type Props = {
   items: AirPurifiersCollection[];
   params: {
      item: string;
   };
   dollarValue: number;
};

function Main({ items, params, dollarValue }: Props) {
   return (
      <>
         {items.map((el, index) => {
            if (el.url.replace(/\s|\//g, "-").toLowerCase() === params.item) {
               return (
                  <section key={index} className={styles.item}>
                     <div className={styles.item__grid}>
                        <div className={styles.item__imgFavorite}>
                           <AddToWishlistContainer
                              element={{
                                 img: el.imageCollection.items[0].url,
                                 name: el.type,
                                 model: el.name,
                                 brand: el.company,
                                 type: el.type,
                                 title: el.type,
                              }}
                           />
                           <Slider images={el.imageCollection.items} />
                           <Imges images={el.imageCollection.items} name={el.name} />
                           <MobileSlider images={el.imageCollection.items} name={el.name} />
                        </div>
                        <div className={styles.item__title}>
                           <h2>
                              {el.type} {el.name}
                           </h2>
                        </div>
                        <div className={styles.item__middle}>
                           <MainParams description={el.description}>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                              </li>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Номинальное напряжение</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.voltage}</div>
                              </li>
                           </MainParams>
                        </div>
                        <div className={styles.item__prices}>
                           <Price price={el.price} dollarValue={dollarValue} />
                           <IsInStock inStock={el.inStock} />
                           <Buy2
                              searchTitle={el.url}
                              item={{
                                 id: Date.now(),
                                 name: el.type,
                                 url: el.url,
                                 company: el.company,
                                 image: el.imageCollection.items[0].url,
                                 model: el.name,
                                 price: el.price,
                                 count: 1,
                              }}
                           />
                           <div className={styles.item__delivery}>Бесплатная доставка по Ташкенту</div>
                           <Cheaper />
                        </div>
                        <Params el={el} />
                     </div>
                  </section>
               );
            }
         })}
      </>
   );
}
export default Main;
