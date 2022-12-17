import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const width = 600;
  const height = 600;

  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <header>this is header</header>
        <h1>main</h1>
        <p>良い感じのコンテンツ</p>
        <div id="graph">
          <svg id="content" viewBox={`0 0 ${width} ${height}`}>
            <rect x={100} y={100} width={100} height={100}></rect>
          </svg>
        </div>
      </main>

      <footer>
        <p>footter</p>
      </footer>
    </div>
  );
}
