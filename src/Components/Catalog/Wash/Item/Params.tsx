import { WashCollection } from "@/app/catalog/wash/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";

function Params({ el }: { el: WashCollection }) {
   const params = [
      {
         title: "Наименование",
         param: "Стиральная машина",
      },
      {
         title: "Сушка",
         param: el.isDrying ? "Да" : "Нет",
      },
      {
         title: "Количество программ",
         param: el.programNums,
      },
      {
         title: "Оборотов в минуту",
         param: el.rpm,
      },
      {
         title: "Размеры (ШхВхГ)",
         param: el.size,
      },
   ];
   return <ParamsContent params={params} />;
}
export default Params;
