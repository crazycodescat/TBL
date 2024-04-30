import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1404px] mx-auto my-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
