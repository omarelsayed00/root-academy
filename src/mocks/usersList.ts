import Image from "next/image";

export type User = {
  id: number;
  name: string;
  photo: string;
  role: string;
  team: string;
};

export const usersInfos: Array<string> = [
  "أسم المستخدم",
  "البريد الإلكتروني",
  "رقم الهاتف",
  "العنوان",
];
export const usersData: Array<User> = [
  {
    id: 1,
    name: "محمد مصطفى أحمد مسعود ",
    photo: "/images/profilePhoto.png",
    role: "مستخدم مسئول",
    team: "الفريق الأول",
  },

  {
    id: 2,
    name: "محمد مصطفى أحمد مسعود ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الثاني",
  },
  {
    id: 3,
    name: "خالد عبد الله ",
    photo: "/images/profile3.png",
    role: "مستخدم عادي",
    team: "الفريق الأول",
  },
  {
    id: 4,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الأول",
  },
  {
    id: 5,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الأول",
  },
  {
    id: 6,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الثاني",
  },
  {
    id: 7,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الثاني",
  },
  {
    id: 8,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الأول",
  },
  {
    id: 9,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الأول",
  },
  {
    id: 10,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الأول",
  },
  {
    id: 11,
    name: "محمد أحمد ",
    photo: "/images/profile2.png",
    role: "مستخدم عادي",
    team: "الفريق الأول",
  },
];

/* const editedUser = props.users.map((user: any) => {
  if (props.currentId == user.id) {
    return {
      ...user,
      username: username != "" ? username : user.username,
      password: password != "" ? password : user.password,
      busId: busId != 0 ? busId : user.busId,
      school: school != "" ? school : user.school,
      role: role != "" ? role : user.role,
    };
  }

  return user;
});
props.setUsers(editedUser); */
