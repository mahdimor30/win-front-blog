import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">وبلاگ من</h3>
            <p className="text-sm text-muted-foreground">به اشتراک گذاری بینش‌ها، داستان‌ها و دانش در موضوعات مختلف.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">پیوندها</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm hover:text-primary">
                  مطالب
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">دسته‌بندی‌ها</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs/category/تکنولوژی" className="text-sm hover:text-primary">
                  تکنولوژی
                </Link>
              </li>
              <li>
                <Link href="/blogs/category/سبک-زندگی" className="text-sm hover:text-primary">
                  سبک زندگی
                </Link>
              </li>
              <li>
                <Link href="/blogs/category/سفر" className="text-sm hover:text-primary">
                  سفر
                </Link>
              </li>
              <li>
                <Link href="/blogs/category/غذا" className="text-sm hover:text-primary">
                  غذا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">اشتراک</h3>
            <p className="text-sm text-muted-foreground mb-4">آخرین مطالب را مستقیماً در صندوق ورودی خود دریافت کنید.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="ایمیل شما" className="px-3 py-2 text-sm border rounded-md w-full" />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">اشتراک</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} وبلاگ من. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}

