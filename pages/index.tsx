import Head from "next/head";
import Link from "next/link";
import { StyledImg } from "styled-components/General";

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Star wars</title>
        <link rel="icon" href="/SWLogo.ico" />
      </Head>

      <main>
        <StyledImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2880px-Star_Wars_Logo.svg.png"
          height={"25%"}
          width={"50%"}
        />
        <Link href="./vehicleList">Przejdź do listy statków.</Link>
      </main>
    </div>
  );
}
