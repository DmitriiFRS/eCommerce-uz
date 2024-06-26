"use client";

import { AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";

function Price({ el2, dollarValue }: { el2: AircondDataModel; dollarValue: number }) {
   const isWifiActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   return (
      <div className={styles.item__price}>
         {!el2.inStock ? "" : `${isWifiActive ? (el2.wifiPrice * dollarValue).toLocaleString("en-US") : (el2.price * dollarValue).toLocaleString("en-US")} UZS`}
      </div>
   );
}
export default Price;

//(el2.wifiPrice * dollarValue).toLocaleString("en-US") : (el2.price * dollarValue).toLocaleString("en-US")
