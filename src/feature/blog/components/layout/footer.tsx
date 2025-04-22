import Link from "next/link";

import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className=" flex justify-around">
        
          <Logo/>

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
