import { WashCollection } from "@/app/catalog/wash/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Imges from "@/Components/Common/ItemCard/Imges";
import MobileSlider from "@/Components/Common/ItemCard/MobileSlider";
import Price from "@/Components/Common/ItemCard/Price";
import Params from "./Params";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import MainParams from "@/Components/Common/ItemCard/MainParams";
import Buy2 from "@/Components/Common/ItemCard/Buy2";
import Slider from "@/Components/Common/ItemCard/Slider";
import Cheaper from "@/Components/Common/ItemCard/Cheaper";
import IsInStock from "@/Components/Common/ItemCard/IsInStock";
import Delivery from "@/Components/Common/ItemCard/Delivery";
import Tabs from "@/Components/Common/ItemCard/Tabs/Tabs";
import Description from "@/Components/Common/ItemCard/Tabs/Description";
import Reviews from "@/Components/Common/ItemCard/Tabs/Reviews";
import { getTabsArray } from "@/Components/Common/ItemCard/Tabs/tabsData";
import Bonus from "@/Components/Common/ItemCard/Bonus";
import InPromotion from "@/Components/Common/ItemCard/InPromotion";

type Props = {
   items: WashCollection[];
   params: {
      item: string;
   };
   dollarValue: number;
   url: string;
   path?: string;
};

function Main({ items, params, dollarValue, url, path }: Props) {
   const tabsArray = getTabsArray(url);
   return (
      <>
         {items.map((el, index) => {
            if (el.url.replace(/\s|\//g, "-").toLowerCase() === params.item) {
               return (
                  <section key={index} className={styles.item}>
                     <div className={styles.item__grid}>
                        <div className={styles.item__imgFavorite}>
                           <Bonus bonus={el.bonus} />
                           <AddToWishlistContainer
                              element={{
                                 img: el.imageCollection.items[0].url,
                                 name: el.name,
                                 model: el.model,
                                 brand: el.company,
                                 type: "Стиральные машины",
                                 title: "Стиральная машина",
                              }}
                           />
                           <Slider images={el.imageCollection.items} />
                           <Imges images={el.imageCollection.items} name={el.name} />
                           <MobileSlider images={el.imageCollection.items} name={el.name} />
                        </div>
                        <div className={styles.item__title}>
                           <h2>{el.name}</h2>
                        </div>
                        <div className={styles.item__middle}>
                           <MainParams>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                              </li>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Сушка</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.isDrying ? "Да" : "Нет"}</div>
                              </li>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Цвет</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.color}</div>
                              </li>
                           </MainParams>
                           <InPromotion inPromotion={el.inPromotion} />
                        </div>
                        <div className={styles.item__prices}>
                           <Price price={el.price} dollarValue={dollarValue} />
                           <IsInStock inStock={el.inStock} />
                           <Buy2
                              searchTitle={el.url}
                              item={{
                                 id: Date.now(),
                                 name: el.name,
                                 url: el.url,
                                 company: el.company,
                                 image: el.imageCollection.items[0].url,
                                 model: el.model,
                                 price: el.price,
                                 color: el.color,
                                 count: 1,
                              }}
                           />
                           <Cheaper />
                           <Delivery />
                        </div>
                        <Tabs path={path} tabsArray={tabsArray} />
                        <section className={styles.item__params}>
                           {path === url + "/description" ? (
                              <Description mainDescription={el.description} descriptions={el.markdownDescription} />
                           ) : path === url + "/reviews" ? (
                              <Reviews review={el.review} />
                           ) : (
                              <Params el={el} />
                           )}
                        </section>
                     </div>
                  </section>
               );
            }
         })}
      </>
   );
}
export default Main;
