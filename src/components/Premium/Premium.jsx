import crown from "../../assets/premium/crown.png";
import product_1 from "../../assets/premium/product-1.png";
import product_2 from "../../assets/premium/product-2.png";
import product_3 from "../../assets/premium/product-3.png";
import product_4 from "../../assets/premium/product-4.png";

const Premium = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-4 ">
        <img src={crown} alt="Crown" className="w-16 h-auto" />
        <h1 className="text-4xl text-primary">PREMIUM</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <img src={product_1} alt="Kahala Bouqet" className="w-full max-w-xs" />
          <h6 className="text-center text-primary">Kahala Bouqet</h6>
        </div>
        <div className="flex flex-col items-center">
          <img src={product_2} alt="Product 2" className="w-full max-w-xs" />
          <h6 className="text-center text-primary">Momoko Bouqet</h6>
        </div>
        <div className="flex flex-col items-center">
          <img src={product_3} alt="Product 3" className="w-full max-w-xs" />
          <h6 className="text-center text-primary">Purple Roses Bouqet</h6>
        </div>
        <div className="flex flex-col items-center">
          <img src={product_4} alt="Product 4" className="w-full max-w-xs" />
          <h6 className="text-center text-primary">Vanda Bouqet</h6>
        </div>
      </div>
    </div>
  );
};

export default Premium;
