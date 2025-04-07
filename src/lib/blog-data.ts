/* eslint-disable @typescript-eslint/no-explicit-any */
export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  content: any;
  date: string;
  author: string;
  image?: string;
  categories: string[];
  tags: string[];
};

const blogs: Blog[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "شروع کار با Next.js",
    excerpt:
      "یاد بگیرید چگونه با Next.js، فریم‌ورک React برای تولید، اپلیکیشن‌های وب مدرن بسازید.",
    content: `
      <p>Next.js یک فریم‌ورک React است که چندین ویژگی اضافی را فعال می‌کند، از جمله رندرینگ سمت سرور و تولید وب‌سایت‌های استاتیک. React یک کتابخانه JavaScript است که به طور سنتی برای ساخت برنامه‌های وب که در مرورگر کاربر با JavaScript رندر می‌شوند، استفاده می‌شود.</p>
      
      <h2>چرا Next.js؟</h2>
      <p>Next.js هدف دارد تجربه توسعه‌دهنده بهترین در کلاس و بسیاری از ویژگی‌های داخلی را داشته باشد، مانند:</p>
      <ul>
        <li>یک سیستم مسیریابی مبتنی بر صفحه شهودی (با پشتیبانی از مسیرهای پویا)</li>
        <li>پیش‌رندرینگ، هم تولید استاتیک (SSG) و هم رندرینگ سمت سرور (SSR) بر اساس هر صفحه پشتیبانی می‌شوند</li>
        <li>تقسیم خودکار کد برای بارگذاری سریع‌تر صفحات</li>
        <li>مسیریابی سمت کلاینت با پیش‌بارگیری بهینه‌شده</li>
        <li>پشتیبانی داخلی از CSS و Sass، و پشتیبانی از هر کتابخانه CSS-in-JS</li>
        <li>محیط توسعه با پشتیبانی از Fast Refresh</li>
        <li>مسیرهای API برای ساخت نقاط پایانی API با توابع بدون سرور</li>
      </ul>
      
      <h2>نصب</h2>
      <p>برای ایجاد یک برنامه Next.js، ترمینال خود را باز کنید، به دایرکتوری که می‌خواهید برنامه را در آن ایجاد کنید بروید و دستور زیر را اجرا کنید:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <h2>ایجاد صفحات</h2>
      <p>در Next.js، یک صفحه یک کامپوننت React است که از یک فایل در دایرکتوری pages صادر می‌شود. صفحات بر اساس نام فایل خود با یک مسیر مرتبط هستند.</p>
      
      <p>به عنوان مثال، اگر فایلی به نام <code>pages/about.js</code> ایجاد کنید که یک کامپوننت React مانند زیر را صادر می‌کند، در <code>/about</code> قابل دسترسی خواهد بود.</p>
      
      <pre><code>
      export default function About() {
        return <div>درباره ما</div>
      }
      </code></pre>
    `,
    date: "2023-05-15T10:00:00Z",
    author: "علی محمدی",
    image: "/placeholder.svg?height=400&width=800",
    categories: ["تکنولوژی", "توسعه وب"],
    tags: ["nextjs", "react", "javascript"],
  },
  {
    slug: "mastering-tailwind-css",
    title: "تسلط بر Tailwind CSS",
    excerpt:
      "کشف کنید چگونه با Tailwind CSS، یک فریم‌ورک CSS مبتنی بر utility، رابط‌های کاربری زیبا بسازید.",
    content: `
      <p>Tailwind CSS یک فریم‌ورک CSS مبتنی بر utility است که با کلاس‌هایی مانند flex، pt-4، text-center و rotate-90 پر شده است که می‌توانند برای ساخت هر طرحی، مستقیماً در مارک‌آپ شما ترکیب شوند.</p>
      
      <h2>چرا Tailwind CSS؟</h2>
      <p>Tailwind CSS چندین مزیت ارائه می‌دهد:</p>
      <ul>
        <li>شما انرژی خود را برای اختراع نام‌های کلاس هدر نمی‌دهید</li>
        <li>CSS شما دیگر رشد نمی‌کند</li>
        <li>ایجاد تغییرات احساس امن‌تری دارد</li>
      </ul>
      
      <h2>نصب</h2>
      <p>ساده‌ترین راه برای افزودن Tailwind به پروژه Next.js شما، نصب آن از طریق npm است:</p>
      <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <h2>پیکربندی</h2>
      <p>یک فایل tailwind.config.js ایجاد کنید:</p>
      <pre><code>
      module.exports = {
        content: [
          './pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      </code></pre>
      
      <h2>استفاده از Tailwind</h2>
      <p>دستورالعمل‌های Tailwind را به CSS خود اضافه کنید:</p>
      <pre><code>
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      </code></pre>
      
      <p>اکنون می‌توانید از کلاس‌های utility Tailwind برای استایل دادن به محتوای خود استفاده کنید:</p>
      <pre><code>
      export default function Home() {
        return (
          <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
              <h1 className="text-6xl font-bold">
                به <a className="text-blue-600" href="https://nextjs.org">Next.js!</a> خوش آمدید
              </h1>
            </main>
          </div>
        )
      }
      </code></pre>
    `,
    date: "2023-06-20T14:30:00Z",
    author: "سارا احمدی",
    image: "/placeholder.svg?height=400&width=800",
    categories: ["توسعه وب", "طراحی"],
    tags: ["css", "tailwind", "frontend"],
  },
  {
    slug: "building-a-blog-with-nextjs",
    title: "ساخت یک وبلاگ با Next.js",
    excerpt:
      "یاد بگیرید چگونه با استفاده از Next.js، MDX و Tailwind CSS یک وبلاگ کامل ایجاد کنید.",
    content: `
      <p>ایجاد یک وبلاگ با Next.js راه عالی برای نمایش نوشته‌های شما و در عین حال یادگیری تکنیک‌های توسعه وب مدرن است.</p>
    ` as string,
    date: "2023-07-10T09:15:00Z",
    author: "محمد رضایی",
    image: "/placeholder.svg?height=400&width=800",
    categories: ["توسعه وب", "آموزش"],
    tags: ["nextjs", "mdx", "blog"],
  },
  {
    slug: "introduction-to-react-server-components",
    title: "معرفی کامپوننت‌های سرور React",
    excerpt:
      "کامپوننت‌های سرور جدید React را کشف کنید و ببینید چگونه می‌توانند عملکرد برنامه شما را بهبود بخشند.",
    content: `
      <p>کامپوننت‌های سرور React یک پارادایم جدید در توسعه React را نشان می‌دهند که به کامپوننت‌ها اجازه می‌دهد بدون سربار JavaScript در سمت کلاینت، در سرور رندر شوند.</p>
      
      <h2>کامپوننت‌های سرور چیست؟</h2>
      <p>کامپوننت‌های سرور نوع جدیدی از کامپوننت‌های React هستند که:</p>
      <ul>
        <li>فقط در سرور رندر می‌شوند</li>
        <li>هیچ تأثیری بر اندازه باندل ندارند</li>
        <li>می‌توانند مستقیماً به منابع داده سمت سرور دسترسی داشته باشند</li>
        <li>می‌توانند با کامپوننت‌های کلاینت در همان درخت کامپوننت ترکیب شوند</li>
      </ul>
      
      <h2>مزایای کامپوننت‌های سرور</h2>
      <p>استفاده از کامپوننت‌های سرور چندین مزیت ارائه می‌دهد:</p>
      <ul>\
        <li>کاهش اندازه باندل JavaScript</li>
        <li>بارگذاری اولیه صفحه سریع‌تر</li>
        <li>دسترسی مستقیم به منابع سمت سرور</li>
        <li>تقسیم کد خودکار</li>
      </ul>
      
      <h2>استفاده از کامپوننت‌های سرور در Next.js</h2>
      <p>Next.js 13 App Router را معرفی کرد که به طور پیش‌فرض از کامپوننت‌های سرور React استفاده می‌کند. در اینجا یک مثال ساده آورده شده است:</p>
      <pre><code >
      // app/page.js - این به طور پیش‌فرض یک کامپوننت سرور است
      async function getData() {
        const res = await fetch('https://api.example.com/data')
        return res.json()
      }
      
      export default async function Page() {
        const data = await getData()
        
        return (
          <main>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </main>
        )
      }
      </code></pre>
      
      <h2>کامپوننت‌های کلاینت</h2>
      <p>هنگامی که به تعامل یا API‌های مرورگر نیاز دارید، می‌توانید با افزودن دستورالعمل "use client" در بالای فایل، از کامپوننت‌های کلاینت استفاده کنید:</p>
      <pre><code>
      'use client'
      
      import { useState } from 'react'
      
      export default function Counter() {
        const [count, setCount] = useState(0)
        
        return (
          <div>
            <p>شمارش: {count}</p>
            <button onClick={() => setCount(count + 1)}>افزایش</button>
          </div>
        )
      }
      </code></pre>
    `,
    date: "2023-08-05T16:45:00Z",
    author: "زهرا کریمی",
    image: "/placeholder.svg?height=400&width=800",
    categories: ["تکنولوژی", "React"],
    tags: ["react", "server-components", "performance"],
  },
  {
    slug: "exploring-web-animations-api",
    title: "بررسی API انیمیشن‌های وب",
    excerpt:
      "یاد بگیرید چگونه با استفاده از API انیمیشن‌های وب بومی، انیمیشن‌های روان و کارآمد ایجاد کنید.",
    content: `
      <p>API انیمیشن‌های وب روشی قدرتمند برای ایجاد و کنترل انیمیشن‌ها در JavaScript بدون اتکا به انتقال‌ها یا انیمیشن‌های CSS ارائه می‌دهد.</p>
      
      <h2>معرفی API انیمیشن‌های وب</h2>
      <p>API انیمیشن‌های وب به شما امکان می‌دهد:</p>
      <ul>
        <li>انیمیشن‌هایی ایجاد کنید که می‌توانند متوقف، معکوس، کند یا تند شوند</li>
        <li>چندین انیمیشن را همگام کنید</li>
        <li>انیمیشن‌هایی ایجاد کنید که به ورودی کاربر پاسخ می‌دهند</li>
        <li>در بسیاری از موارد، عملکرد بهتری نسبت به انیمیشن‌های CSS داشته باشید</li>
      </ul>
      
      <h2>استفاده پایه</h2>
      <p>در اینجا یک مثال ساده از استفاده از API انیمیشن‌های وب آورده شده است:</p>
      <pre><code>
      const element = document.querySelector('.my-element');
      
      const animation = element.animate(
        [
          // کلیدفریم‌ها
          { transform: 'translateX(0px)' },
          { transform: 'translateX(300px)' }
        ],
        {
          // گزینه‌های زمان‌بندی
          duration: 1000,
          iterations: Number.POSITIVE_INFINITY,
          direction: 'alternate',
          easing: 'ease-in-out'
        }
      );
      </code></pre>
      
      <h2>کنترل انیمیشن‌ها</h2>
      <p>API روش‌هایی برای کنترل انیمیشن ارائه می‌دهد:</p>
      <pre><code>
      // توقف انیمیشن
      animation.pause();
      
      // پخش انیمیشن
      animation.play();
      
      // معکوس کردن انیمیشن
      animation.reverse();
      
      // لغو انیمیشن
      animation.cancel();
      
      // تنظیم نرخ پخش (سرعت)
      animation.playbackRate = 2; // سرعت 2 برابر
      </code></pre>
      
      <h2>استفاده با React</h2>
      <p>می‌توانید از API انیمیشن‌های وب در کامپوننت‌های React استفاده کنید:</p>
      <pre><code>
      import { useEffect, useRef } from 'react';
      
      function AnimatedComponent() {
        const elementRef = useRef(null);
        
        useEffect(() => {
          const element = elementRef.current;
          
          const animation = element.animate(
            [
              { opacity: 0, transform: 'scale(0.8)' },
              { opacity: 1, transform: 'scale(1)' }
            ],
            {
              duration: 500,
              easing: 'ease-out',
              fill: 'forwards'
            }
          );
          
          return () => {
            animation.cancel();
          };
        }, []);
        
        return <div ref={elementRef}>محتوای انیمیشن‌دار</div>;
      }
      </code></pre>
    `,
    date: "2023-09-12T11:20:00Z",
    author: "امیر حسینی",
    image: "/placeholder.svg?height=400&width=800",
    categories: ["توسعه وب", "فرانت‌اند"],
    tags: ["animations", "javascript", "css"],
  },
  {
    slug: "state-management-with-react-query",
    title: "مدیریت وضعیت با React Query",
    excerpt:
      "کشف کنید چگونه React Query دریافت داده و مدیریت وضعیت را در برنامه‌های React ساده می‌کند.",
    content: `
      <p>React Query یک کتابخانه قدرتمند برای دریافت، ذخیره‌سازی، همگام‌سازی و به‌روزرسانی وضعیت سرور در برنامه‌های React است.</p>
      
      <h2>چرا React Query؟</h2>
      <p>React Query بسیاری از مشکلات رایج در برنامه‌های React را حل می‌کند:</p>
      <ul>
        <li>ذخیره‌سازی داده‌ها برای جلوگیری از درخواست‌های شبکه غیرضروری</li>
        <li>حذف تکرار چندین درخواست برای همان داده</li>
        <li>به‌روزرسانی‌های پس‌زمینه برای تازه نگه داشتن داده‌ها</li>
        <li>بهینه‌سازی‌های عملکرد مانند صفحه‌بندی و بارگذاری تنبل</li>
        <li>مدیریت وضعیت سرور جدا از وضعیت کلاینت</li>
      </ul>
      
      <h2>نصب</h2>
      <p>برای شروع کار با React Query، آن را از طریق npm نصب کنید:</p>
      <pre><code>npm install @tanstack/react-query</code></pre>
      
      <h2>استفاده پایه</h2>
      <p>در اینجا یک مثال ساده از استفاده از React Query برای دریافت داده آورده شده است:</p>
      <pre><code>
      import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
      
      // ایجاد یک کلاینت
      const queryClient = new QueryClient()
      
      function App() {
        return (
          // ارائه کلاینت به برنامه شما
          <QueryClientProvider client={queryClient}>
            <Example />
          </QueryClientProvider>
        )
      }
      
      function Example() {
        // استفاده از هوک useQuery برای دریافت داده
        const { isLoading, error, data } = useQuery({
          queryKey: ['todos'],
          queryFn: () => fetch('https://api.example.com/todos').then(res => res.json())
        })
        
        if (isLoading) return <div>در حال بارگذاری...</div>
        
        if (error) return <div>خطایی رخ داده است: {error.message}</div>
        
        return (
          <ul>
            {data.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )
      }
      </code></pre>
      
      <h2>تغییرات</h2>
      <p>React Query همچنین راهی برای به‌روزرسانی داده‌ها در سرور ارائه می‌دهد:</p>
      <pre><code>
      import { useMutation, useQueryClient } from '@tanstack/react-query'
      
      function TodoForm() {
        const queryClient = useQueryClient()
        
        const mutation = useMutation({
          mutationFn: newTodo => {
            return fetch('https://api.example.com/todos', {
              method: 'POST',
              body: JSON.stringify(newTodo),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
          },
          onSuccess: () => {
            // نامعتبر کردن و بازیابی مجدد لیست todos
            queryClient.invalidateQueries({ queryKey: ['todos'] })
          }
        })
        
        return (
          <form onSubmit={e => {
            e.preventDefault()
            mutation.mutate({ title: e.target.todo.value })
            e.target.reset()
          }}>
            <input name="todo" />
            <button type="submit">افزودن کار</button>
          </form>
        )
      }
      </code></pre>
    `,
    date: "2023-10-18T13:40:00Z",
    author: "مریم نوری",
    image: "/placeholder.svg?height=400&width=800",
    categories: ["React", "توسعه وب"],
    tags: ["react-query", "state-management", "data-fetching"],
  },
];

export function getAllBlogs(): Blog[] {
  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRecentBlogs(count: number): Blog[] {
  return getAllBlogs().slice(0, count);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  blogs.forEach((blog) => {
    blog.categories.forEach((category) => {
      categories.add(category);
    });
  });
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      tags.add(tag);
    });
  });
  return Array.from(tags);
}

export function getBlogsByCategory(category: string): Blog[] {
  return getAllBlogs().filter((blog) => blog.categories.includes(category));
}

export function getBlogsByTag(tag: string): Blog[] {
  return getAllBlogs().filter((blog) => blog.tags.includes(tag));
}
