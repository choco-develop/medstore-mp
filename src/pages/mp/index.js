import React from 'react';
import {
  InputBase, Pagination,
} from '@mui/material';
import CategoryTreeView from '../../components/tree-view/CategoryList';
import CategoryProductList from '../../components/tree-view/CategoryProductList';

export default function Index() {
  return (
    <section
      className="flex py-14 px-5 gap-x-3"
    >
      <aside className="hidden basis-1/4 md:flex flex-col gap-y-3 bg-white items-center min-h-[600px]">
        <h3 className="uppercase pt-3 font-serif text-main">
          Category filter
        </h3>
        <InputBase
          placeholder="Enter category name"
          className="mb-3 border-2 pt-1 px-2 w-[90%] active:shadow-md"
        />
        <div className="w-[90%]">
          <CategoryTreeView />
        </div>
      </aside>
      <main className="w-full md:basis-3/4 flex flex-col gap-y-5 bg-white items-center py-5">
        <h3 className="uppercase font-serif text-main">Medical Equipment</h3>
        <hr className="text-main w-full" />
        <ul className="flex gap-3 px-2
                      xs:flex-row xs:flex-wrap xs:gap-0 xs:gap-y-2 xs:justify-center
                      sm:flex-row sm:flex-wrap sm:gap-0
                      md:flex-row md:justify-start md:gap-y-5 md:gap-x-3
                      md:mx-auto"
        >
          <CategoryProductList />
        </ul>
        <hr className="w-full" />
        <Pagination count={10} />
      </main>
    </section>
  );
}
