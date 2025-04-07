import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          وبلاگ من
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            خانه
          </Link>
          <Link href="/blogs" className="text-sm font-medium hover:text-primary">
            مطالب
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            درباره ما
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            تماس با ما
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            اشتراک
          </Button>
        </div>
      </div>
    </header>
  );
}

