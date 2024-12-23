import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-secondary ">
        {/* Image */}
        <img 
          src={hero} 
          alt="Hero Image" 
          className="w-full lg:w-1/2 object-cover"
        />
        
        {/* Content */}
        <div className="p-4 lg:p-8 lg:w-1/2">
          <h1  className="text-center text-footerColor text-3xl sm:text-4xl lg:text-5xl font-playfairDisplay mb-8">
            DISCOUNT
          </h1>
          
          <p className="text-white text-lg sm:text-xl lg:text-2xl text-center mb-8">
            Do not miss the opportunity of Flowers, Chocolates, Arrangements and Bouquets that will excite your loved ones!
            Do not miss the opportunity of Flowers, Chocolates, Arrangements and Bouquets that will excite your loved ones!
            Do not miss the opportunity of Flowers, Chocolates, Arrangements and Bouquets that will excite your loved ones!
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4 sm:space-y-0 space-y-4 mt-8">
            <button className="p-3 w-auto rounded-xl text-white bg-primary">
              ORDER
            </button>
            <button className="p-3 w-auto rounded-xl text-white bg-primary">
              ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
