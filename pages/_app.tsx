import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Roboto } from "@next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "300", "400", "500", "700"],
});



export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily}, sans-serif;
        }
      `}</style>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
