const WaletElement = ({ amount }: { amount: string }) => {
    const wallet = (Number(amount) * 0.95).toFixed(2);
    if (Number(wallet) > 0) {
      return (
        <p className="text-base font-thin text-[#777] justify-between px-4 flex ">
          <span>{wallet}</span>
          <span>یورو</span>
        </p>
      );
    }
    return (
      <p className="text-base font-thin text-[#777]">
        مبلغ واریزی به کیف پول شما (یورو)
      </p>
    );
  };

export default WaletElement;  