import Footer from "@/feature/byo/components/layout/footer";
import Header from "@/feature/byo/components/layout/header";
import TelegramLinks from "@/feature/byo/components/telegram-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TelegramLinks />
      <Header />
      {children}
      <Footer />
    </>
  );
}
