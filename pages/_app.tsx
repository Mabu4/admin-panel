import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Roboto } from "@next/font/google";
import { getBlog } from "@/src/graphql/queries";
import { API, graphqlOperation, Amplify } from "aws-amplify";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "300", "400", "500", "700"],
});

Amplify.configure({
  aws_appsync_region: "eu-central-1", // (optional) - AWS AppSync region
  aws_appsync_graphqlEndpoint: process.env.URI, // (optional) - AWS AppSync endpoint
  aws_appsync_authenticationType: "API_KEY", // (optional) - Primary AWS AppSync authentication type
  aws_appsync_apiKey: process.env.API_KEY, // (optional) - AWS AppSync API Key
});
// Auth.configure(awsconfig);

export default function App({ Component, pageProps }: AppProps) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await API.graphql(
        graphqlOperation(getBlog, {
          id: "21833fa7-49af-47c3-b773-745d01cc6240",
        })
      );
      console.log(res);
    };
    fetch();
  }, []);

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
          <li>
            <Link href="/secondsite">Secondsite</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} post={post} setPost={setPost} />
    </>
  );
}
