import "@/styles/globals.css";

import Head from "next/head";
import Provider from "@/components/layout/Provider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>It-horse</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no"
        />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
