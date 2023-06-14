import menuIcon from "./assets/icons/icon-network.svg";

const navigation = [
  {
    id: '1',
    title: "Titolo 1° livello",
    icon: menuIcon,
    submenu: [],
  },
  {
    id: '2',
    title: "Titolo 1° livello",
    icon: menuIcon,
    submenu: [
      {
        id: '2_1',
        title: "Titolo 2° livello",
      },
      {
        id: '2_2',
        title: "Titolo 2° livello",
        tabs: [
          {
            id: '2_2_1',
            title: "Tab 1 - 3° livello",
          },
          {
            id: '2_2_2',
            title: "Tab 2 - 3° livello",
          },
          {
            id: '2_2_3',
            title: "Tab 3 - 3° livello",
          }
        ],
      },
      {
        id: '2_3',
        title: "Titolo 2° livello",
      },
    ],
  },
  {
    id: '3',
    title: "Titolo 1° livello",
    icon: menuIcon,
    submenu: [
      {
        id: '3_1',
        title: "Titolo 2° livello",
      },
      {
        id: '3_2',
        title: "Titolo 2° livello",
      },
    ],
  },
  {
    id: '4',
    title: "Titolo 1° livello",
    icon: menuIcon,
    submenu: [
      {
        id: '4_1',
        title: "Titolo 2° livello",
      },
      {
        id: '4_2',
        title: "Titolo 2° livello",
      },
    ],
  }
];

export default navigation;
