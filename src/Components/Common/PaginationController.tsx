"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import NextNProgress from "nextjs-progressbar";
import NProgress from "nprogress";
import { useEffect } from "react";

type Props = {
   pagination: {
      page: number;
      totalPages: number;
   };
   url: string;
};

function PaginationController({ pagination, url }: Props) {
   const router = useRouter();
   const searchParams = useSearchParams();
   const newSearchParams = new URLSearchParams(searchParams.toString());
   const pageNumbers = [];
   for (let i = 1; i <= pagination.totalPages; i++) {
      pageNumbers.push(i);
   }
   function togglePage(index: number) {
      if (pagination.page === index + 1) return;
      newSearchParams.set("page", (index + 1).toString());
      router.push(url + "?" + newSearchParams.toString());
      NProgress.start();
   }
   useEffect(() => {
      NProgress.done();
   }, [searchParams]);
   return (
      <div className={styles.pagination}>
         <NextNProgress color="#03cffc" />
         <ul className={styles.pagination__list}>
            {pageNumbers.map((el, index) => {
               return (
                  <li className={styles.pagination__item} key={index}>
                     <button onClick={() => togglePage(index)} className={`${pagination.page === index + 1 ? styles.pagination__active : ""}`}>
                        {el}
                     </button>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default PaginationController;
