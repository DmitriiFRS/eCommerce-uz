import { StaticImageData } from "next/image";
import oneflowCassette from "../../public/Img/Catalog/VrfInner/vrf-cassette.png";
import ductatom from "../../public/Img/Catalog/VrfInner/vrf-duct.png";
import wmatom from "../../public/Img/Catalog/VrfInner/vrf-wm.png";

export type AtomI = AtomIInner[];

export type AtomIInner = {
   name: string;
   url: string;
   imges: StaticImageData[];
   description: string;
   company: string;
   connect: string;
   fanType: string;
   fanQuantity: string;
   freonType: string;
   atomModels: AtomIModel[];
};

export type AtomIModel = {
   model: string;
   coolingPower: string;
   heatingPower: string;
   airFlow: string;
   noiseLevel: string;
   size: string;
   weight: string;
   pipeConnect: string;
   drenage: string;
   panelSize?: string;
   panelWeight?: string;
   staticPressure?: string;
};

export const atomInner: AtomI = [
   {
      name: "Кассетный однопоточный внутренний блок MINI VRF ATOM",
      url: "atom-oneflow-cassette",
      imges: [oneflowCassette],
      description: "Однопоточный кассетный блок серии ATOM - это Элегантность и Комфорт в Каждой Детали.",
      company: "Midea",
      connect: "1 phase, 220-240V, 50Hz",
      fanType: "AC",
      fanQuantity: "1",
      freonType: "R410A",
      atomModels: [
         {
            model: "MDV-D06Q1/N1-D(At)",
            coolingPower: "1.8",
            heatingPower: "2.2",
            airFlow: "523/404/275",
            noiseLevel: "37/34/30",
            size: "1054×153×425",
            weight: "12.5",
            pipeConnect: "Ф6.35/Ф12.7",
            panelSize: "1180×25×465",
            panelWeight: "3.5",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-D07Q1/N1-D(At)",
            coolingPower: "2.2",
            heatingPower: "2.6",
            airFlow: "523/404/275",
            noiseLevel: "37/34/30",
            size: "1054×153×425",
            weight: "12.5",
            pipeConnect: "Ф6.35/Ф12.7",
            panelSize: "1180×25×465",
            panelWeight: "3.5",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-D09Q1/N1-D(At)",
            coolingPower: "2.8",
            heatingPower: "3.2",
            airFlow: "573/456/315",
            noiseLevel: "39/37/34",
            size: "1054×153×425",
            weight: "13",
            pipeConnect: "Ф6.35/Ф12.7",
            panelSize: "1180×25×465",
            panelWeight: "3.5",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-D12Q1/N1-D(At)",
            coolingPower: "3.6",
            heatingPower: "4",
            airFlow: "573/456/315",
            noiseLevel: "39/37/34",
            size: "1054×153×425",
            weight: "13",
            pipeConnect: "Ф6.35/Ф12.7",
            panelSize: "1180×25×465",
            panelWeight: "3.5",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-D15Q1/N1-D(At)",
            coolingPower: "4.5",
            heatingPower: "17(5)",
            airFlow: "693/600/476",
            noiseLevel: "41/39/35",
            size: "1275×189×450",
            weight: "18.5",
            pipeConnect: "Ф6.35/Ф12.7",
            panelSize: "1350×25×505",
            panelWeight: "4",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-D18Q1/N1-D(At)",
            coolingPower: "5.6",
            heatingPower: "6.3",
            airFlow: "792/688/549",
            noiseLevel: "42/40/36",
            size: "1275×189×450",
            weight: "18.8",
            pipeConnect: "Ф9.53/Ф15.9",
            panelSize: "1350×25×505",
            panelWeight: "4",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-D24Q1/N1-D(At)",
            coolingPower: "7.1",
            heatingPower: "8",
            airFlow: "933/749/592",
            noiseLevel: "44/41/37",
            size: "1275×189×450",
            weight: "19.5",
            pipeConnect: "Ф9.53/Ф15.9",
            panelSize: "1350×25×505",
            panelWeight: "4",
            drenage: "OD Ф25",
         },
      ],
   },
   {
      name: "Канальный внутренний блок ARC MINI VRF ATOM",
      url: "atom-arcmini-duct",
      imges: [ductatom],
      description: "ARC MINI VRF ATOM - Канальный Внутренний Блок",
      company: "Midea",
      connect: "1 phase, 220-240V,50/60Hz",
      fanType: "DC",
      fanQuantity: "1",
      freonType: "R410A",
      atomModels: [
         {
            model: "MDV-DV05T2HN1-Arc(At)",
            coolingPower: "1.5",
            heatingPower: "1.8",
            airFlow: "340/330/320/310/300/295/290",
            noiseLevel: "27/25.5/24/23/22/21/20",
            size: "550×199×450",
            weight: "11.5",
            pipeConnect: "Ф6.35/Ф12.7",
            staticPressure: "10(10-50)",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-DV07T2HN1-Arc(At)",
            coolingPower: "2.2",
            heatingPower: "2.5",
            airFlow: "370/345/335/320/310/300/295",
            noiseLevel: "28/27/26/25/24/23/22",
            size: "550×199×450",
            weight: "11.5",
            pipeConnect: "Ф6.35/Ф12.7",
            staticPressure: "10(10-50)",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-DV09T2HN1-Arc(At)",
            coolingPower: "2.8",
            heatingPower: "3.2",
            airFlow: "460/430/410/380/350/320/300",
            noiseLevel: "30/29/28/27/26/25/24",
            size: "550×199×450",
            weight: "11.5",
            pipeConnect: "Ф6.35/Ф12.7",
            staticPressure: "10(10-50)",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-DV12T2HN1-Arc(At)",
            coolingPower: "3.6",
            heatingPower: "4",
            airFlow: "605/550/500/450/410/360/320",
            noiseLevel: "30/29/28/27/26/25.5/25",
            size: "700×199×450",
            weight: "13.5",
            pipeConnect: "Ф6.35/Ф12.7",
            staticPressure: "10(10-50)",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-DV15T2HN1-Arc(At)",
            coolingPower: "4.5",
            heatingPower: "5",
            airFlow: "800/720/690/625/560/515/435",
            noiseLevel: "34/33/32/30/29/28/26",
            size: "900×199×450",
            weight: "17",
            pipeConnect: "Ф6.35/Ф12.7",
            staticPressure: "10(10-50)",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-DV18T2HN1-Arc(At)",
            coolingPower: "5.6",
            heatingPower: "6.3",
            airFlow: "900/780/745/655/580/560/470",
            noiseLevel: "36/34/33/32/31/30/28",
            size: "900×199×450",
            weight: "17",
            pipeConnect: "Ф9.53/Ф15.9",
            staticPressure: "10(10-50)",
            drenage: "OD Ф25",
         },
         {
            model: "MDV-DV24T2HN1-Arc(At)",
            coolingPower: "7.1",
            heatingPower: "8",
            airFlow: "1145/1000/930/840/750/665/580",
            noiseLevel: "37/35/34/32.5/31/30/29",
            size: "1100×199×450",
            weight: "20.5",
            pipeConnect: "Ф9.53/Ф15.9",
            staticPressure: "10(10-50)",
            drenage: "OD Ф25",
         },
      ],
   },
   {
      name: "Настенный внутренний блок MINI VRF ATOM",
      url: "atom-wall-mounted",
      imges: [wmatom],
      description: "Настенный внутренний блок MINI VRF ATOM",
      company: "Midea",
      connect: "1 phase, 220-240V, 50Hz",
      fanType: "AC",
      fanQuantity: "1",
      freonType: "R410A",
      atomModels: [
         {
            model: "MDV-D07G/N1-M(At)",
            coolingPower: "2.2",
            heatingPower: "2.4",
            airFlow: "446/429/424/409/394/382/373",
            noiseLevel: "34/33/33/32/32/31/31",
            size: "835×280×203",
            weight: "8.5",
            pipeConnect: "Ф6.35/Ф12.7",
            drenage: "OD Φ16",
         },
         {
            model: "MDV-D09G/N1-M(At)",
            coolingPower: "2.8",
            heatingPower: "3.2",
            airFlow: "457/445/433/421/419/410/402",
            noiseLevel: "33/33/32/32/31/31/31",
            size: "835×280×203",
            weight: "8.5",
            pipeConnect: "Ф6.35/Ф12.7",
            drenage: "OD Φ16",
         },
         {
            model: "MDV-D12G/N1-M(At)",
            coolingPower: "3.6",
            heatingPower: "4",
            airFlow: "447/429/399/369/339/333/303",
            noiseLevel: "36/35/34/33/32/32/32",
            size: "835×280×203",
            weight: "9.7",
            pipeConnect: "Ф6.35/Ф12.7",
            drenage: "OD Φ16",
         },
         {
            model: "MDV-D15G/N1-M(At)",
            coolingPower: "4.5",
            heatingPower: "5",
            airFlow: "648/618/582/563/546/505/476",
            noiseLevel: "37/36/34/34/33/32/31",
            size: "990×315×223",
            weight: "13.8",
            pipeConnect: "Ф6.35/Ф12.7",
            drenage: "OD Φ16",
         },
         {
            model: "MDV-D18G/N1-M(At)",
            coolingPower: "5.6",
            heatingPower: "6.3",
            airFlow: "798/764/723/691/665/627/595",
            noiseLevel: "42/41/40/39/38/37/36",
            size: "990×315×223",
            weight: "13.8",
            pipeConnect: "Φ9.53/Φ15.9",
            drenage: "OD Φ16",
         },
         {
            model: "MDV-D24G/N1-M(At)",
            coolingPower: "7.1",
            heatingPower: "8",
            airFlow: "1240/1171/1107/1045/976/914/869",
            noiseLevel: "48/47/45/44/42/39/38",
            size: "1194×343×262",
            weight: "17.4",
            pipeConnect: "Φ9.53/Φ15.9",
            drenage: "OD Φ16",
         },
         {
            model: "MDV-D28G/N1-M(At)",
            coolingPower: "8",
            heatingPower: "9",
            airFlow: "1248/1194/1119/1056/993/914/863",
            noiseLevel: "48/47/45/43/42/39/38",
            size: "1194×343×262",
            weight: "17.6",
            pipeConnect: "Φ9.53/Φ15.9",
            drenage: "OD Φ16",
         },
         {
            model: "MDV-D32G/N1-M(At)",
            coolingPower: "9",
            heatingPower: "10",
            airFlow: "1427/1403/1303/1232/1186/1096/1043",
            noiseLevel: "52/51/50/49/47/45/43",
            size: "1194×343×262",
            weight: "17.6",
            pipeConnect: "Φ9.53/Φ15.9",
            drenage: "OD Φ16",
         },
      ],
   },
];
