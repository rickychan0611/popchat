import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add to Home Screen icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/72.png" />
        {/* Add a manifest file */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
