import "../styles/globals.css";
import Head from "next/head";
import AppProvider, { AppContext } from "../context/AppProvider";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import Header from "../components/Header";
import MusicPlayer from "../components/MusicPlayer";
import { useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Music Power | Năng lượng ngày mới</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/ae/1c/e2/ae1ce207-2e93-9520-f71d-2d25ea8ab274/Icon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp"
        />
      </Head>
      <body>
        <Container>
          <Sidebar />
          <Section id="scroll_section">
            <Header />
            <Component {...pageProps} />
          </Section>
          <MusicPlayer />
        </Container>
      </body>
    </AppProvider>
  );
}

export default MyApp;
