const ResultEuro = ({ amount, price }: { amount: string; price: string }) => {
  const calculated = (Number(amount) * 0.95 * 0.98 * Number(price)).toFixed(2);

  if (Number(calculated) > 0) {
    return (
      <p className="flex justify-between text-sm text-[#77777780] font-light px-4">
        <span> {calculated}</span> <span>تومان</span>
      </p>
    );
  }

  return (
    <p className="flex justify-between text-sm text-[#77777780] font-light px-5 ">
      مبلغی که به شما تحویل داده می‌شود (تومان)
    </p>
  );
};

export default ResultEuro;
