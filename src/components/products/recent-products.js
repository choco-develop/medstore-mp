import RecentProductList from './recent-product-list';

const RecentProducts = RecentProductList.map((value) => (
  <div className="grid grid-rows-2 hover:border-main border rounded-lg" key={`${value.name}`}>
    <div className="row-span-1">
      <img
        src={value.image_url}
        alt={value.name}
        className="rounded-t-lg w-full h-full"
        loading="lazy"
      />
    </div>
    <div className="p-1 grid grid-rows-3">
      <div className="flex items-center">
        <img src={value.brand} className="w-1/2 h-1/2" loading="lazy" alt="..." />
      </div>
      <div className="row-span-2 grid grid-rows-2">
        <p className="text-[#364954] font-bold text-center">{value.name}</p>
        <h2 className="text-[#364954] font-italic text-center text-main font-bold">{` ${value.price}`}</h2>
      </div>
    </div>
  </div>
));

export default RecentProducts;
