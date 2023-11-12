export type DriverDto = {
  id: number;
  name: string;
  sdate: string;
  edate: string;
  status: "قيد المراجعة" | "تم التحقق" | "تم الرفض";
  plateNo: string;
  movesNo: number;
};

export const driversInfos: Array<string> = [
  "إسم السائق",
  "رقم اللوحة",
  "الرخصة",
  "عدد النقلات",
  "الحالة",
  "التحقق",
];
export const driversActions: Array<string> = ["التحقق"];
export const driversData: Array<DriverDto> = [
  {
    id: 1,
    name: "Ahmed",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "قيد المراجعة",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 2,
    name: "Mohamed",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "قيد المراجعة",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 3,
    name: "Mohamed",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "قيد المراجعة",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 4,
    name: "Ahmed",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "قيد المراجعة",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 5,
    name: "Blabla",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "قيد المراجعة",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 6,
    name: "Ahmed",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم الرفض",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 7,
    name: "Ahmed",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم الرفض",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 8,
    name: "Blabla",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم الرفض",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 9,
    name: "Blabla",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم الرفض",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 10,
    name: "Blabla",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم التحقق",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 11,
    name: "Blabla",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم التحقق",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 12,
    name: "Blabla",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم التحقق",
    plateNo: "ABC2020",
    movesNo: 22,
  },
  {
    id: 13,
    name: "Blabla",
    sdate: new Date().toLocaleString(),
    edate: new Date().toLocaleString(),
    status: "تم التحقق",
    plateNo: "ABC2020",
    movesNo: 22,
  },
];
