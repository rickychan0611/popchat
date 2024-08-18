import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Rubik:wght@700&family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet" />

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
