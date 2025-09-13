import React, { ReactNode } from "react";
import Footer from "./components/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
