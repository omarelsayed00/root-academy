import Image from "next/image";

export type Package = {
  id: number;
  selected: boolean;
  name: string;
  type: string;
  price: number;
  brand: string;
  desc: string;
  img: string;
};

export const packagesData: Array<Package> = [
  {
    id: 1,
    selected: false,
    name: "الباقـــة الـبرونزية",
    type: "مكملات غدائية",
    price: 500,
    brand: "Nike",
    desc: "منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر",
    img: "/images/package1.png",
  },
  {
    id: 2,
    selected: false,
    name: "الباقـــة الـفضية",
    type: "مكملات غدائية",
    price: 400,
    brand: "Adidas",
    desc: "منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر",
    img: "/images/package2.png",
  },
  {
    id: 3,
    selected: false,
    name: "الباقـــة الـذهبية",
    type: "مكملات غدائية",
    price: 300,
    brand: "Hyper Protein",
    desc: "منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر",
    img: "/images/package3.png",
  },
  {
    id: 4,
    selected: false,
    name: "الباقـــة الـبرونزية",
    type: "مكملات غدائية",
    price: 500,
    brand: "Hyper Protein",
    desc: "منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر",
    img: "/images/package1.png",
  },
  {
    id: 5,
    selected: false,
    name: "الباقـــة الـفضية",
    type: "مكملات غدائية",
    price: 500,
    brand: "Hyper Protein",
    desc: "منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية لكل اصحاب كمال الأجسام فلكسي يوفر لكم مجموعة متكاملة من المكملات الإحترافية منتج احترافي 100% لكل اصحاب كمال الأجسام فلكسي يوفر",
    img: "/images/package2.png",
  },
];
