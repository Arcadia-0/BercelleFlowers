import circle_1 from "../../assets/circle-1.png";
import circle_2 from "../../assets/circle-2.png";
import circle_3 from "../../assets/circle-3.png";

const CircleSection = () => {
  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-center xl:gap-28  md:gap-20 sm:gap-12">
        {/* Circle 1 */}
        <div className="flex justify-center items-center w-[350px] h-[350px] rounded-full overflow-hidden">
          <img
            src={circle_1}
            alt="Circle 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Circle 2 */}
        <div className="flex justify-center items-center w-[350px] h-[350px] rounded-full overflow-hidden">
          <img
            src={circle_2}
            alt="Circle 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Circle 3 */}
        <div className="flex justify-center items-center w-[350px] h-[350px] rounded-full overflow-hidden">
          <img
            src={circle_3}
            alt="Circle 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CircleSection;





