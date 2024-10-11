// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <meta name="description" content="Join PopChat for 1-on-1 private chat, live streaming chat with beautiful women, and exclusive private video chat rooms." />
        <link rel="canonical" href="https://popchat.live" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="PopChat - 1-on-1 Private Chat & Live Streaming" />
        <meta property="og:description" content="Join PopChat for 1-on-1 private chat, live streaming chat with beautiful women, and exclusive private video chat rooms." />
        <meta property="og:image" content="https://popchat.live/1on1.png" />
        <meta property="og:url" content="https://popchat.live" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PopChat" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PopChat - 1-on-1 Private Chat & Live Streaming" />
        <meta name="twitter:description" content="Join PopChat for 1-on-1 private chat, live streaming chat with beautiful women, and exclusive private video chat rooms." />
        <meta name="twitter:image" content="https://popchat.live/1on1.png" />
        <meta name="twitter:site" content="@PopChatdotlive" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Rubik:wght@700&family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet" />

        {/* Add to Home Screen icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/72.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://popchat.live",
              "name": "PopChat",
              "logo": "https://popchat.live/logo.png",
              "sameAs": [
                "https://twitter.com/PopChatdotlive",
                "http://tiktok.com/@PopChat.live",
                "https://www.twitch.tv/popchatlive"
                // Add other social profiles if available
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
