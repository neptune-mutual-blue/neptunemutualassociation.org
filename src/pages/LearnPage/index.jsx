import Cross from "@/icons/Cross";
import NMALogo from "@/icons/Logo";
import { useState } from "react";

import ContentPage from "@/common/Learn/ContentPage";
import LearnMoreNavigation from "@/common/Navigation/LearnMoreNavigation";
import ContactPage from "@/common/Learn/ContactPage";
import Circle from "@/icons/Circle";
import ContactPageMobile from "@/common/Learn/ContactPageMobile";

const LearnPage = () => {
  const [showPage, setshowPage] = useState(0);

  return (
    <div className="w-full h-auto bg-center bg-no-repeat bg-cover bg-learn-bg-small lg:bg-learn-bg md:h-screen">
      <LearnMoreNavigation />

      <div className="mx-4 mt-8 text-white border-t border-white md:ml-learn-more-md lg:ml-learn-more md:max-w-content min-h-content">
        {showPage === 0 && <ContentPage />}
        {showPage === 1 && <ContactPage />}
        <div className="block md:hidden">
          <ContactPageMobile />
        </div>
      </div>

      <div className="justify-between hidden w-10 mx-auto mt-28 md:flex">
        <div
          className="cursor-pointer"
          onClick={() => {
            setshowPage(0);
          }}
        >
          <Circle stroke={"white"} fill={showPage === 0 ? "white" : "none"} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setshowPage(1);
          }}
        >
          <Circle stroke={"white"} fill={showPage === 1 ? "white" : "none"} />
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
