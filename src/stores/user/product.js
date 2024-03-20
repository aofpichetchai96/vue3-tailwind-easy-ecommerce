import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "Dog",
        imageUrl:
          "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        quantity: 1,
        about: "a dog black",
        status: "open",
        price: 100,
      },
      {
        name: "Tree",
        imageUrl:
          "https://fastly.picsum.photos/id/476/200/300.jpg?grayscale&hmac=rdN4pV7JFAtH4ZU68rquanFotYqni0n_KK5r1xHH_ZM",
        quantity: 2,
        about: "Whole forest of trees",
        status: "open",
        price: 130,
      },
      {
        name: "Dogpug",
        imageUrl:
          "https://fastly.picsum.photos/id/1025/200/300.jpg?grayscale&hmac=yWlM4YgYpQ19yEPQSYvBTGpMoGUaoidypwPzn5fzSbg",
        quantity: 3,
        about: "Pin-up dog",
        status: "open",
        price: 120,
      },
    ],
  }),
  actions: {
    filterProducts(searchText) {
      return this.list.filter((product) => product.name.includes(searchText));
    },
  },
});
