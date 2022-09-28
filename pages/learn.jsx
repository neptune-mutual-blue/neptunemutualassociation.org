import Head from "next/head";
import LearnPage from "@/src/pages/LearnPage";

export default function Learn() {
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
      <LearnPage />
    </div>
  );
}
