const products = [
  {
    id: "abc123",
    name: "Product 1",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc124",
    name: "Product 2",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc125",
    name: "Product 3",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc126",
    name: "Product 4",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc127",
    name: "Product 5",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc128",
    name: "Product 6",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc129",
    name: "Product 7",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1210",
    name: "Product 8",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1211",
    name: "Product 9",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1212",
    name: "Product 10",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1213",
    name: "Product 11",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1214",
    name: "Product 12",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1215",
    name: "Product 13",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1216",
    name: "Product 14",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1217",
    name: "Product 15",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1218",
    name: "Product 16",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1219",
    name: "Product 17",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1220",
    name: "Product 18",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1221",
    name: "Product 19",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
  {
    id: "abc1222",
    name: "Product 20",
    description: "This is product 1",
    price: 2000,
    sellAmount: 5,
    image: "https://contents.mediadecathlon.com/p1583894/k$2411dbe26ddbc551f92c947ae8080f91/sq/Womens-Tennis-Shoes-TS500-Navy.jpg",
  },
]

module.exports = products