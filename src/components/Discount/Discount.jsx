import crown from "../../assets/premium/crown.png";

const Discount = () => {
  return (
    <div id="discounts" className="px-4 py-8">
  <div className="flex items-center justify-center space-x-4 my-8">
    <img src={crown} alt="Crown" className="w-16 h-auto" />
    <h1 className="text-4xl text-primary">DISCOUNTS</h1>
  </div>

  {/* Main Container */}
  <div className="max-w-7xl mx-auto px-4">
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="max-w-md bg-secondary p-6 rounded-lg shadow-lg space-y-8 min-h-[600px] flex flex-col justify-between">
  <h2 className="text-2xl text-white text-center">Special for Our New Members</h2>
  <h1 className="text-6xl sm:text-8xl lg:text-7xl text-center text-white">%10</h1>
  <p className="text-white text-2xl text-center">
    E-Bulletin is valid for your first order only for approved member registration.
  </p>
  <div className="flex justify-center mt-12">
    <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300 w-full sm:w-max">
      SIGN UP
    </button>
  </div>
</div>


      {/* Kart 2 and 3 in same column */}
      <div className="lg:col-span-2 grid grid-cols-1 gap-8">
        {/* Card 2 */}
        <div className="max-w-md mx-auto bg-primary p-6 rounded-lg shadow-lg space-y-8 min-h-[300px] flex flex-col justify-between">
  <h2 className="text-2xl text-white text-center">New Collection</h2>
  <h2 className="text-2xl text-white text-center">Romantic Dream</h2>
  <p className="text-white text-2xl text-center">
    Enjoy an exclusive 15% discount on your first order with us.
  </p>
  <div className="flex justify-center mt-12">
    <button className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300 w-full sm:w-max">
      ORDER
    </button>
  </div>
</div>


        {/* Card 3 */}
        <div className="max-w-md mx-auto bg-primary p-6 rounded-lg shadow-lg space-y-8 min-h-[300px] flex flex-col justify-between">
  <h2 className="text-2xl text-white text-center">Your Autumn Favourites</h2>
  <h2 className="text-2xl text-white text-center">Fall Blooms</h2>
  <p className="text-white text-2xl text-center">
    Get 20% off on all items. Hurry, offer ends soon!
  </p>
  <div className="flex justify-center mt-12">
    <button className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300 w-full sm:w-max">
      DISCOVER
    </button>
  </div>
</div>

      </div>

      {/* Card 4 */}
      <div className="max-w-md mx-auto bg-secondary p-6 rounded-lg shadow-lg space-y-8 min-h-[600px] flex flex-col justify-between">
  <h2 className="text-2xl text-white text-center">Colorful Fun Balloons</h2>
  <p className="text-white text-2xl text-center">
    Send a different and surprising gift
  </p>
  <div className="flex justify-center mt-12">
    <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300 w-full sm:w-max">
      DISCOVER
    </button>
  </div>
</div>

    </div>
  </div>
</div>
  );
};

export default Discount;
