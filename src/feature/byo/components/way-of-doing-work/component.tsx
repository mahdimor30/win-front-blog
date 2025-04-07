import Description from "./description";

const WayOfDoingWork = () => {
  return (
    <div className=' flex flex-col items-center        bg-[#F8F8F8] '>
      <h2 className='text-2xl font-IranYekan font-black mt-[24px]   '>
        روش انجام کار
      </h2>
      <div className='mt-6 flex flex-col items-center '>
        <iframe
          className=' w-[312px] h-[214px] md:w-[434px] md:h-[300px]  border-2 border-[#777777] rounded-lg'
          src='https://www.aparat.com/video/video/embed/videohash/G6xi4/vt/frame'
          allowFullScreen
        />
        <a
          href='https://winatalent.com/byo#byoVideoEn'
          target='_blank'
          className='font-IranYekan font-bold text-lg text-[#4D7C8A] leading-8 mt-6 underline-offset-8 underline cursor-pointer hover:opacity-50 '
        >
          ویدئوی توضیحات به زبان انگلیسی
        </a>
      </div>
      <Description />
    </div>
  );
};

export default WayOfDoingWork;
