"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { useEffect, useState } from "react";
import FilterBlock from "./FilterBlock";

type Props = {
   isMobile: boolean;
   url: string;
   filterFields: FilterFields[];
};

type FilterFields = {
   title: string;
   titleVal: string;
   list: string[];
   id: string[];
   filterVal: string[];
};

type CheckboxState = {
   [key: string]: boolean;
};

function Sidebar({ isMobile, url, filterFields }: Props) {
   const router = useRouter();
   const searchParams = useSearchParams();
   const newSearchParams = new URLSearchParams(searchParams.toString());

   const [checkboxState, setCheckboxState] = useState<CheckboxState>({});

   useEffect(() => {
      const initialState: CheckboxState = {};
      filterFields.forEach((el: FilterFields) => {
         el.filterVal.forEach((val) => {
            initialState[val as string] = searchParams.getAll(el.titleVal)?.includes(val as string);
         });
      });
      setCheckboxState(initialState);
   }, [searchParams]);

   function toggleCheckbox(key: string, value: string) {
      let existingValues = newSearchParams.getAll(key);
      if (!existingValues.includes(value)) {
         newSearchParams.append(key, value);
      } else {
         newSearchParams.delete(key, value);
      }
      console.log(searchParams.getAll(key));
      router.push(url + "?" + newSearchParams.toString());
   }

   return (
      <div className={`${styles.aircond__aside} ${isMobile ? styles.aircond__aside__mobile : ""}`}>
         {filterFields.map((el, index) => {
            return <FilterBlock key={index} content={el} checkboxState={checkboxState} toggleCheckbox={toggleCheckbox} />;
         })}
      </div>
   );
}
export default Sidebar;