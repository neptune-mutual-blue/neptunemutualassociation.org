import { useEffect, useState } from "react";

export const useCookie = (key, defaultValue) => {
  const getCookie = () => getItem(key) || defaultValue;

  let documentDefined;

  const getItem = (key) => {
    documentDefined?.cookie.split("; ").reduce((total, currentCookie) => {
      const item = currentCookie.split("=");
      const storedKey = item[0];
      const storedValue = item[1];

      return key === storedKey ? decodeURIComponent(storedValue) : total;
    }, "");
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      documentDefined = document;
    }
  }, []);

  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value, numberOfDays) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };

  return { cookie, updateCookie };
};
