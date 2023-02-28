import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [post, setPost] = useState([]);

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
          <li>
            <Link href="/testsite">Testsite</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} post={post} setPost={setPost} />
    </>
  );
}
