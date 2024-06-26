import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/icons/it-horse-blue.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
