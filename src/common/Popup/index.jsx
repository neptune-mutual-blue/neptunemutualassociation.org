import Link from "next/link";
import { useEffect, useState } from "react";

const Popup = () => {
  let cookieName = "cookie-consent";
  let cookieValidity = 12;

  const [cookieDomain, setCookieDomain] = useState();

  const getCookie = (name) => {
    if (process.browser) {
      let v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return v ? v[2] : null;
    }
  };

  let userConsent = getCookie(cookieName);

  const setConsent = (consent) => {
    if (process.browser) {
      let cookieExpiry = new Date();
      console.log("here");
      cookieExpiry = new Date(
        cookieExpiry.setMonth(cookieExpiry.getMonth() + cookieValidity)
      );
      document.cookie =
        cookieName +
        '={"consent":' +
        consent +
        ',"timestamp": "' +
        Date.now() +
        '"}; domain=' +
        cookieDomain +
        "; path=/; expires=" +
        cookieExpiry +
        ";";
    }
  };

  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCookieDomain(window.location.hostname);
    }
  }, []);

  useEffect(() => {
    let currentCookie = JSON.parse(getCookie(cookieName));
    if (currentCookie?.consent) {
      setShowPopup(false);
    }
  }, [cookieName]);

  const handleButtonClick = (e) => {
    console.log(e.target.value);
    setConsent(e.target.value);
    setShowPopup(false);
  };

  if (!showPopup) {
    return;
  }

  return (
    <div className="fixed top-0 left-0 z-30 w-screen h-screen overflow-auto text-black bg-white resize-y bg-opacity-70">
      <div className="absolute max-w-lg p-5 mx-auto my-24 bg-white rounded-lg top-1/2 left-5 right-5">
        <div>
          <h4>Your Cookie Preferences</h4>
          <hr className="my-4" />
          <p>
            This website uses cookies to give our users the best experience. You
            can manage your settings below or find out by reading our{" "}
            <Link href="/privacy-policy">
              <a className="hover:underline text-421FC2">Privacy Policy</a>
            </Link>
            .
          </p>
        </div>
        <div className="text-right">
          <button
            onClick={handleButtonClick}
            value="false"
            className="px-5 py-2 mt-2 ml-2 border rounded-lg border-303D87"
          >
            Use Necessary Only
          </button>
          <button
            onClick={handleButtonClick}
            value="true"
            className="px-5 py-2 mt-2 ml-2 text-white border-none rounded-lg bg-421FC2"
          >
            Allow All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
