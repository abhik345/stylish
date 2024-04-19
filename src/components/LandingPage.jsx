import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div className="masker " key={index}>
            <div className="w-fit flex">
              {index === 1 && (
                <div className=" mr-[1vw] w-[8vw] h-[6vw] relative top-[2.8vw] bg-green-400"></div>
              )}
              <h1 className=" pt-[2vw] -mb-[1vw] text-[9vw] uppercase h-full leading-[.75] tracking-tighter font-semibold font-['Founders Grotesk']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex items-center justify-evenly py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center justify-between gap-3">
          <div className="px-5 py-2 border-[2px] font-light text-md uppercase border-zinc-600 rounded-full">
            Start the object
          </div>
          <div className="w-10 h-10 flex justify-center items-center border-[2px] capitalize border-zinc-600 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
