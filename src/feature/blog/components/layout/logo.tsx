import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center">
      <Link href="https://winatalent.com" className="flex items-center">
        <span className="text-2xl font-semibold tracking-wider text-gray-800">
          WIN<span className="text-gray-500">a</span>TALENT
        </span>
      </Link>
    </div>
  );
}

export default Logo;
