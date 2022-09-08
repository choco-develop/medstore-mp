import ProductList from './top-product-list';

const TopProducts = ProductList.map((value) => (
  <div
    className="flex flex-col hover:border-main
              border rounded-lg h-1/2
              xs:basis-1/2
              sm:basis-1/3
              md:max-w-[245px] md:basis-1/5
              lg:w-1/6
              xl:basis-1/6"
    key={`${value.name}`}
  >
    <div className="flex justify-center">
      <img
        src={value.image_url}
        alt={value.name}
        className="object-contain rounded-t-lg w-full
                  xs:h-1/3
                  sm:h-1/3
                  md:h-[229px]"
        loading="lazy"
      />
    </div>
    <div className="p-1 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <img
          src={value.brand}
          className="w-1/2 h-[40px] object-contain
                  xs:h-[30px] xs:w-1/2
                  sm:h-[30px] sm:w-1/2
                  md:h-[50px] md:w-1/2"
          loading="lazy"
          alt="..."
        />
      </div>
      <div className="flex">
        <p
          className="text-[#364954] font-bold
                  truncate font-serif
                  md:text-lg md:font-normal
                  md:mt-2"
        >
          {value.name}
        </p>
      </div>
      <div className="flex">
        <p className="text-[#364954] truncate font-serif italic text-sm">Company name</p>
      </div>
      <div className="flex justify-start p-3 gap-x-1 md:p-0 md:mb-2">
        <button type="button" className="bg-gray-300 px-1 text-[#364954] py-2 border rounded-md hover:border-main">Compare</button>
        <span
          className={`${value.available ? 'text-main bg-blue-200 ' : 'text-[#364954] bg-gray-300'}
                  font-serif px-3 border rounded-md capitalize hover:border-main`}
        >
          { value.available ? 'available in stock' : 'available in order'}
        </span>
      </div>
    </div>
  </div>
));

export default TopProducts;
