import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function index(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS | {pageTitle}</title>
        <meta name="description" content="Website NextJS basic" />
      </Head>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
}
