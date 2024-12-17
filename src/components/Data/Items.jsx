// src/data/items.js
import product_1 from "../../assets/premium/product-1.png";
import product_2 from "../../assets/premium/product-2.png";
import product_3 from "../../assets/premium/product-3.png";
import product_4 from "../../assets/premium/product-4.png";

// Item'lar için fonksiyon
const items = () => {
  return [
    {
      id: 1,
      image: product_1, 
      name: "Ürün 1"
    },
    {
      id: 2,
      image: product_2,
      name: "Ürün 2"
    },
    {
      id: 3,
      image: product_3,
      name: "Ürün 3"
    },
    {
      id: 4,
      image: product_4,
      name: "Ürün 4"
    },
    
  ];
};

export default items;
