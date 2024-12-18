import items from "../Data/Items"; 
import crown from "../../assets/premium/crown.png"

const Products = () => {
  const productList = items(); 

  return (
    <div>
      {/* Başlık kısmı */}
      <div className="container mx-auto flex items-center justify-center space-x-4 my-8">
        <img src={crown} alt="Crown" className="w-16 h-auto" />
        <h1 className="text-4xl text-primary">PRODUCTS</h1>
      </div>

      {/* Ürünlerin listelendiği alan */}
      <div className="flex flex-wrap justify-center gap-8">
        {productList.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.image} alt={item.name} className="w-full max-w-xs" />
            <h6 className="text-center text-primary">{item.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
