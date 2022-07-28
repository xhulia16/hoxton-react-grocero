export type StoreItem = {
    id: number
    name: string
    price: number
    stock: number
    inCart: number
  };
  

const storeItems: Array<StoreItem> = [
      {
        id: 1,
        name: "beetroot",
        price: 0.35,
        stock: 2,
        inCart: 4,
      },
      {
        id: 2,
        name: "carrot",
        price: 0.20,
        stock: 2,
        inCart: 0,
      },
      {
        id: 3,
        name: "apple",
        price: 0.15,
        stock: 2,
        inCart: 0,
      },
      {
        id: 4,
        name: "apricot",
        price: 0.35,
        stock: 2,
        inCart: 0,
      },
      {
        id: 5,
        name: "avocado",
        price: 0.75,
        stock: 2,
        inCart: 1,
      },
      {
        id: 6,
        name: "bananas",
        price: 0.35,
        stock: 2,
        inCart: 0,
      },
      {
        id: 7,
        name: "bell-pepper",
        price: 0.35,
        stock: 2,
        inCart: 0,
      },
      {
        id: 8,
        name: "berry",
        price: 0.30,
        stock: 2,
        inCart: 7,
      },
      {
        id: 9,
        name: "blueberry",
        price: 0.65,
        stock: 2,
        inCart: 5,
      },
      {
        id: 10,
        name: "eggplant",
        price: 0.25,
        stock: 2,
        inCart: 0,
      },
    ];

    export default storeItems;
  
  