"use client";

import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import WifiOption from "./WifiOption";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { setUrl, toggleWifiCheckbox } from "@/Redux/Slices/ItemCard.slice";
import { useEffect } from "react";

function WifiOptionBody({ el2, params }: { el2: AircondDataModel; params: string }) {
   const dispatch = useAppDispatch();
   const isActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   const url = useAppSelector((state) => state.itemSlice.modelUrl);

   useEffect(() => {
      if (!url) {
         dispatch(setUrl(params.split("_")[0]));
      }
      if (params.split("_")[0] !== url && isActive) {
         dispatch(toggleWifiCheckbox(false));
      }
   }, []);
   return <>{el2.wifiPrice ? <WifiOption /> : ""}</>;
}
export default WifiOptionBody;
