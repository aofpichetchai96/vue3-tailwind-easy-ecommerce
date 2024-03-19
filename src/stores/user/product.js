import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "test 1",
        imageUrl:
          "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test 2",
        imageUrl:
          "https://fastly.picsum.photos/id/806/200/300.jpg?blur=2&hmac=ibClclMyOyOhUoep40BAprv7bylcPI6KZCsyA1m55MM",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test 3",
        imageUrl:
          "https://fastly.picsum.photos/id/476/200/300.jpg?grayscale&hmac=rdN4pV7JFAtH4ZU68rquanFotYqni0n_KK5r1xHH_ZM",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test 4",
        imageUrl:
          "https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test 5",
        imageUrl:
          "https://fastly.picsum.photos/id/1025/200/300.jpg?grayscale&hmac=yWlM4YgYpQ19yEPQSYvBTGpMoGUaoidypwPzn5fzSbg",
        quantity: 10,
        about: "testt",
        status: "open",
        price: 100,
      },
    ],
  }),
});
