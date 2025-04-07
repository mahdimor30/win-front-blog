import Collapse from "../ui/collapse";
import data from "./data";

const Faq = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-IranYekan terxt-[#333333] my-6 text-2xl font-black">
        سؤالات متداول
      </h3>
      <div className="flex w-11/12 flex-col">
        {data.map((item) => (
          <Collapse key={item.textButton} {...item} />
        ))}
      </div>
      <a
        href="mailto:freelancer@winatalent.com"
        dir="rtl"
        className="font-IranYekan mb-14 cursor-pointer text-center text-base font-extrabold text-[#4D7C8A] md:text-lg"
      >
        برای کسب اطلاعات بیشتر در مورد سرویس BYO می توانید به
        info@winatalent.net ایمیل بزنید.
      </a>
    </div>
  );
};

export default Faq;
