import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Main from "@/Components/Catalog/AirPurifiers/Item/Main";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
      query {
   dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
      value
      } 
  airPurifiersCollection {
    items {
      name
      url
      price
      type
      company
      voltage
      description
      frequency
      power
      noiseLowSpeed
      anions
      particleRemovalVol
      formaldehyde
      m2
      filterReplacement
      weight
      size
      tankValue
      sprayVolume
      colors
      cableLength
      oscillationDegree
      engineSpeed
      airSpeed
      inStock
      markdownDescription
      review
      bonus
      inPromotion
      imageCollection(limit: 4) {
        items {
          url
        }
      }
    }
  }
}
      `);

   const url = `/catalog/air-purifiers/${params.item}`;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={data.data.airPurifiersCollection.items} params={params} dollarValue={data.data.dollarValue.value} url={url} />
         </div>
      </div>
   );
}
export default page;
