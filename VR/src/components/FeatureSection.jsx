import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-8 text-2xl font-medium px-4 py-2 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex justify-center items-center">
            <div className="flex flex-col items-center text-center mx-6">
              <div className="flex justify-center items-center h-10 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full">
                {feature.icon}
              </div>
              <h5 className="mt-4 text-xl">{feature.text}</h5>
              <p className="text-md p-2 mb-6 text-neutral-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;