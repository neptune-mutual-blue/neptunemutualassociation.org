import "tailwindcss/tailwind.css";
import "@fontsource/poppins/latin.css";

import Popup from "@/common/Popup";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Popup />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
