import Head from "next/head";
import HomePage from "../src/pages/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Neptune Mutual Association</title>
        <meta
          name="description"
          content="Get guaranteed payouts from our parametric cover model. Resolve incidents faster without the need for claims assessment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
