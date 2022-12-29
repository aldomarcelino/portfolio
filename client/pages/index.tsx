import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aldo's Portfolio</title>
      </Head>
      <h1 className="text-red-500">HEllo World !</h1>
    </>
  );
}
