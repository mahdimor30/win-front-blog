"use client";

import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

import telegramIcons from "@/feature/byo/assets/telegram.svg";

const hrefTelegram = "https://t.me/winatalent_admin";

export default function TelegramLinks() {
  return (
    <div className="fixed bottom-6 right-7 md:bottom-10 md:right-16">
      <a target="_blank" className="" href={hrefTelegram}>
        <Image
          alt="telegram"
          className="w-20 md:w-28"
          src={telegramIcons as StaticImport}
        />
      </a>
    </div>
  );
}
