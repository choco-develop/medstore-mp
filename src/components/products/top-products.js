import React from 'react';
import {
  Button,
} from '@mui/material';
import ProductList from './top-product-list';

export default function TopProducts() {
  return ProductList.map((value) => (
    <li
      className="flex flex-col hover:shadow-lg
                  border rounded-lg h-1/2
                  xs:w-3/4
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
          <Button
            type="button"
            variant="outlined"
            id="compBtn"
          >
            Compare
          </Button>
          <Button
            type="button"
            variant="outlined"
            size="small"
            color={value.available ? 'primary' : 'warning'}
          >
            { value.available ? 'available in stock' : 'available in order'}
          </Button>
        </div>
      </div>
    </li>
  ));
}
