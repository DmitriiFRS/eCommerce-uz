import aircond from "../../../../public/Img/Catalog/air-cond.png";
import colcond from "../../../../public/Img/Catalog/col-cond.png";
import ductcond from "../../../../public/Img/Catalog/duct-cond.png";
import cascond from "../../../../public/Img/Catalog/cas-cond.png";
import vrfouter from "../../../../public/Img/Catalog/vrf-outer.png";
import vrfinner from "../../../../public/Img/Catalog/vrf-inner.png";
import vrfaccessories from "../../../../public/Img/Catalog/vrf-accessories.png";
import wmfancoil from "../../../../public/Img/Catalog/wm-fancoil.png";
import casfancoil from "../../../../public/Img/Catalog/cas-fancoil.png";
import ductfancoil from "../../../../public/Img/Catalog/duct-fancoil.png";
import ftsfancoil from "../../../../public/Img/Catalog/fts-fancoil.png";
import multiinner from "../../../../public/Img/Catalog/multi-inner.png";
import multiouter from "../../../../public/Img/Catalog/multi-outer.png";
import { StaticImageData } from "next/image";

export type ListInner = {
   title: string;
   href: string;
   img: StaticImageData;
};

export type CatalogListInner = {
   title: string;
   list: ListInner[];
};

type CatalogList = CatalogListInner[];

export const catalogList: CatalogList = [
   {
      title: "Бытовые кондиционеры",
      list: [
         {
            title: "Настенные сплит-системы",
            href: "air-conditioners",
            img: aircond,
         },
      ],
   },
   {
      title: "Полупромышленные сплит-системы",
      list: [
         {
            title: "Колонные сплит-системы",
            href: "col-conditioners",
            img: colcond,
         },
         {
            title: "Канальные сплит-системы",
            href: "duct-conditioners",
            img: ductcond,
         },
         {
            title: "Кассетные сплит-системы",
            href: "cassette-conditioners",
            img: cascond,
         },
      ],
   },
   {
      title: "Мульти-сплит системы",
      list: [
         {
            title: "Наружные блоки",
            href: "multi-outer",
            img: multiouter,
         },
         {
            title: "Внутренние блоки",
            href: "multi-inner",
            img: multiinner,
         },
      ],
   },
   {
      title: "VRF системы",
      list: [
         {
            title: "Наружные блоки",
            href: "vrf-outer",
            img: vrfouter,
         },
         {
            title: "Внутренние блоки",
            href: "vrf-inner",
            img: vrfinner,
         },
         {
            title: "Аксессуары",
            href: "vrf-accessories",
            img: vrfaccessories,
         },
      ],
   },
   {
      title: "Чиллеры",
      list: [
         {
            title: "Чиллеры на охлаждение",
            href: "vrf-outer",
            img: vrfouter,
         },
      ],
   },
   {
      title: "Фанкойлы",
      list: [
         {
            title: "Настенные фанкойлы",
            href: "wall-mounted-fancoils",
            img: wmfancoil,
         },
         {
            title: "Кассетные фанкойлы",
            href: "cassette-fancoils",
            img: casfancoil,
         },
         {
            title: "Канальные фанкойлы",
            href: "duct-fancoils",
            img: ductfancoil,
         },
         {
            title: "Напольно-потолочные фанкойлы",
            href: "floor-to-ceiling-fancoils",
            img: ftsfancoil,
         },
      ],
   },
];
