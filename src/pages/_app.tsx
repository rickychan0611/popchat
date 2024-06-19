import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { Noto_Sans, Noto_Serif } from 'next/font/google';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
  host: any;
};
const notoSerif = Noto_Serif({
  weight: ['400', '700'], // Specify weights you need
  subsets: ['latin'], // Specify subsets you need
});
const noto = Noto_Sans({
  weight: ['400', '700'], // Specify weights you need
  subsets: ['latin'], // Specify subsets you need
});
export default function App({ Component, pageProps }: Props) {

  //Dynamic layout. Layouts are located in the layouts folder
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily}, ${notoSerif.style.fontFamily}  ;
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </>
  )


}
