import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Drew Schineller</title>
        <meta name="description" content="Personal Site of Drew Schineller" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <Navbar />
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
