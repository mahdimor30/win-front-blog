import Cart from "./cart";
import data from "./data";

const Description = () => {
  return (
    <div className="flex flex-col w-full  mx-36 mt-20 ">
      {data.map((item, index) => (
        <Cart
          key={item.number}
          data_length={data.length}
          index={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default Description;
