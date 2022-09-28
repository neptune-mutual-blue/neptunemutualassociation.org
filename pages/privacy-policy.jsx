import Head from "next/head";
import PrivacyPage from "@/src/pages/PrivacyPage";

export default function PrivacyPolicy() {
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
      <PrivacyPage />
    </div>
  );
}
