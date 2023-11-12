export type matchType = {
  id: number;
  name: string;
  photo: string;
  hour: string;
  minute: string;
  ampm: string;
  date: Date;
};

export const matchesData: Array<matchType> = [
  {
    id: 1,
    name: "فريق روت",
    photo: "photo.png",
    hour: "9",
    minute: "00",
    ampm: "ص",
    date: new Date(),
  },
  {
    id: 2,
    name: "فريق روت",
    photo: "photo.png",
    hour: "10",
    minute: "00",
    ampm: "م",
    date: new Date(),
  },
  {
    id: 3,
    name: "فريق روت",
    photo: "photo.png",
    hour: "9",
    minute: "00",
    ampm: "ص",
    date: new Date(),
  },
  {
    id: 4,
    name: "فريق روت",
    photo: "photo.png",
    hour: "9",
    minute: "00",
    ampm: "ص",
    date: new Date(),
  },
  {
    id: 5,
    name: "فريق روت",
    photo: "photo.png",
    hour: "9",
    minute: "00",
    ampm: "ص",
    date: new Date(),
  },
];
