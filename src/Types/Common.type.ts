export type DollarData = {
   data: {
      dollarValue: {
         value: number;
      };
   };
};
export type FilterFields = {
   title: string;
   titleVal: string;
   list: string[];
   filterVal: string[];
   id: string[];
};

export type ImageRest = {
   fields: {
      file: {
         url: string;
      };
   };
};

export type GridProps = {
   title: string;
   currencyVal: number;
   url: string;
   pagination: { page: number; totalPages: number };
   filterFields: FilterFields[];
   visibleFilterFields?: FilterFields[];
};
