const products = [
  {
    id: 1,
    brand: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    price: 250,
    discountPercent: 50,
    images: [
      {
        id: "img1",
        fullSize: require("./assets/image-product-1.jpg"),
        thumbnail: require("./assets/image-product-1-thumbnail.jpg"),
      },
      {
        id: "img2",
        fullSize: require("./assets/image-product-2.jpg"),
        thumbnail: require("./assets/image-product-2-thumbnail.jpg"),
      },
      {
        id: "img3",
        fullSize: require("./assets/image-product-3.jpg"),
        thumbnail: require("./assets/image-product-3-thumbnail.jpg"),
      },
      {
        id: "img4",
        fullSize: require("./assets/image-product-4.jpg"),
        thumbnail: require("./assets/image-product-4-thumbnail.jpg"),
      },
    ],
  },
];

export default products;
