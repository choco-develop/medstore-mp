import RecentProductList from './recent-product-list';

const RecentProducts = RecentProductList.map((value) => (
  <div
    className="flex flex-col hover:border-main
              border rounded-lg h-1/2
              xs:basis-1/2
              sm:basis-1/3
              md:basis-1/4
              lg:basis-1/5
              xl:basis-1/6"
    key={`${value.name}`}
  >
    <div className="flex justify-center">
      <img
        src={value.image_url}
        alt={value.name}
        className="object-scale-down rounded-t-lg w-full
                  xs:h-1/3
                  sm:h-1/3
                  md:h-[229px]"
        loading="lazy"
      />
    </div>
    <div className="p-1 flex flex-col gap-2">
      <div className="flex items-center">
        <img
          src={value.brand}
          className="w-1/2 h-[40px]
                  xs:h-[30px] xs:w-1/2
                  sm:h-[30px] sm:w-1/2
                  md:h-[30px] md:w-1/2"
          loading="lazy"
          alt="..."
        />
      </div>
      <div className="row-span-2 grid grid-rows-2">
        <p className="text-[#364954] font-bold text-center truncate font-serif">{value.name}</p>
      </div>
      <div className="flex justify-start p-3">
        <span className={`${value.available ? 'text-main bg-blue-200 ' : 'text-black bg-gray-300'} font-serif px-3 rounded-md capitalize`}>{ value.available ? 'available in stock' : 'available in order'}</span>
      </div>
    </div>
  </div>
));

export default RecentProducts;
