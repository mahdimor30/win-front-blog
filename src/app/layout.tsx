import "./globals.css";

import type { Metadata } from "next";
import type React from "react";

import { Toaster } from "@/components/ui/sonner";
import { getMeta } from "@/data/meta";
import { vazirmatn } from "@/font";
import { getStrapiURL } from "@/utils/api-helpers";

import Providers from "./providers";

const FALLBACK_SEO: Metadata = {
  title: "وبلاگ من",
  description: "یک وبلاگ مدرن ساخته شده با Next.js",
};

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getMeta();

  if (!meta?.data?.data || meta?.error) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.data;

  return {
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
    icons: {
      icon: [new URL(favicon?.url ?? "", getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="trancy-und">
      <body className={vazirmatn.className}>
        <div className="flex min-h-screen flex-col">
          {/* <Header /> */}
          <Providers>
            <main>{children}</main>
            <Toaster />
          </Providers>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
