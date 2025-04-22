import React from "react";

import Footer from "./footer";
import Header from "./header";

function LayoutBlog({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex-grow px-4 py-8">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default LayoutBlog;
