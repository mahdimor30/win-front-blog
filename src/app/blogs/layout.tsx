import React from "react";

import Header from "@/components/header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div  className="flex-grow container mx-auto px-4 py-8">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
