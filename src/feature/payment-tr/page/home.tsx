import React from "react";

import Header from "../components/headers";
import Main from "../components/home";

export default async function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Main />
    </div>
  );
}
