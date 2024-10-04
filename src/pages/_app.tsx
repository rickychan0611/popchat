import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { Android_Download, H5_URL } from "@/constants/constant";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
  host: any;
};
const notoSerif = Noto_Serif({
  weight: ["400", "700"], // Specify weights you need
  subsets: ["latin"], // Specify subsets you need
});
const noto = Noto_Sans({
  weight: ["400", "700"], // Specify weights you need
  subsets: ["latin"], // Specify subsets you need
});
export default function App({ Component, pageProps }: Props) {
  //Dynamic layout. Layouts are located in the layouts folder
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  const router = useRouter();
  const { query, isReady } = router;

  useEffect(() => {
    if (isReady) {
      const from = query.from;
      // const from_a = query.from_a;
      // const from_m = query.from_m;
      const user = query.user;
      if (
        from
        // || from_a || from_m)
      ) {
        router.push(H5_URL + `/mcn-refer?from=${from}`);
        // from_a && router.push(H5_URL + `/mcn-refer?from_a=${from_a}`);
        // from_m && router.push(H5_URL + `/mcn-refer?from_m=${from_m}`);
      } else if (user) {
        router.push(H5_URL + `/personinfo?user=${user}`);
      } else {
        const userAgent = navigator.userAgent;

        // Detect platform
        let platform = "Unknown";

        if (/android/i.test(userAgent)) {
          platform = "Android";
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
          platform = "iOS";
        }

        if (platform === "iOS" || platform === "Android") router.push(H5_URL);
      }
    }
  }, [isReady]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily}, ${notoSerif.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
