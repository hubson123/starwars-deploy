import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Star wars</title>
        <link rel="icon" href="/SWLogo.ico" />
      </Head>

      <main>
        <Link
          href="./vehicleList"
          style={{
            textDecoration: "none",
            color: "yellow",
          }}
        >
          Przejdź do listy statków.
        </Link>
      </main>
    </div>
  );
}
