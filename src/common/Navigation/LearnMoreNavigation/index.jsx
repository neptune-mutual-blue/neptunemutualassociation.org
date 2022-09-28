import Cross from "@/icons/Cross";
import NMALogo from "@/icons/Logo";
import NMALogoSmall from "@/icons/NMALogoSmall";
import Link from "next/link";
import React from "react";

const LearnMoreNavigation = () => (
  <div className="flex justify-between w-auto ml-learn-more-sm md:ml-learn-more-md lg:ml-learn-more">
    <Link href="/">
      <div className="w-[99px] h-[117px] md:w-[168px] md:h-[198px] bg-303D87 flex flex-col items-center pt-8 md:pt-14 cursor-pointer">
        <div className="hidden md:block">
          <NMALogo />
        </div>
        <div className="block md:hidden">
          <NMALogoSmall />
        </div>
        <p className="mt-2 font-bold tracking-wider text-center text-white uppercase text-xxs">
          Neptune Mutual
          <br /> Association
        </p>
      </div>
    </Link>
    <div className="mt-8 mr-4 cursor-pointer md:mr-12 md:mt-12">
      <Link href="/">
        <div>
          <Cross />
        </div>
      </Link>
    </div>
  </div>
);

export default LearnMoreNavigation;
