import { type Metadata } from "next";

import Byo from "@/feature/byo/pages/byo";

export const metadata: Metadata = {
  title: "Byo",
  description: "Byo",
};

export default function ByoPage() {
  return <Byo />;
}
