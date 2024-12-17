import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between bg-secondary">
        <img src={hero} alt="Hero Image" className="hero-img" />
        <div className="p-8">
          <h1 style={{color:'#8E2424'}} className="text-center text-5xl font-playfairDisplay mb-8">DISCOUNT</h1>
          <p className="text-white text-2xl text-center">
          Do not miss the opportunity of Flowers, Chocolates, Arrangements and Bouquets that will excite your loved ones!
          Do not miss the opportunity of Flowers, Chocolates, Arrangements and Bouquets that will excite your loved ones!
          Do not miss the opportunity of Flowers, Chocolates, Arrangements and Bouquets that will excite your loved ones!
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4 mt-8">
          <button className=" p-3 w-auto rounded-xl text-white bg-primary">ORDER</button>
          <button className="p-3 w-auto rounded-xl text-white bg-primary">ALL PRODUCTS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
