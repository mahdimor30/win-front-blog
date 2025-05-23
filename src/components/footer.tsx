import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            {/* لوگو و توضیحات */}
            <div className="mb-4 flex items-center">
              <div className="rounded-md bg-primary px-3 py-2 text-xl font-bold text-primary-foreground">
                وبلاگ
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              به اشتراک گذاری بینش‌ها، داستان‌ها و دانش در موضوعات مختلف.
            </p>
          </div>

          <div>
            {/* لینک‌های اصلی */}
            <h3 className="mb-4 text-lg font-semibold">لینک‌های مهم</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary">
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="/service-byo"
                  className="text-sm hover:text-primary"
                >
                  سرویس BYO
                </Link>
              </li>
              <li>
                <Link
                  href="/payment-rules"
                  className="text-sm hover:text-primary"
                >
                  قوانین پرداخت WINaTALENT
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} وبلاگ من. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
