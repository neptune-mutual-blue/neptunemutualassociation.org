import Navigation from "@/common/Navigation";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center relative bg-home-bg h-screen w-full bg-center bg-no-repeat bg-cover">
      <Navigation />
      <div className="border-y border-y-white lg:py-16 md:py-9 py-4">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl uppercase text-center font-bold tracking-wider md:leading-[80px]">
          Neptune Mutual <br />
          association
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
