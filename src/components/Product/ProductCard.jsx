import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-[340px] sm:max-w-full p-[35px_20px] border border-gray-200 opacity-100">
      <div className="block sm:hidden text-start">
        <p className="text-sm md:text-base lg:text-lg text-gray-900 font-semibold truncate">
          {product.brand}
        </p>
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 truncate">
          {product.name}
        </h3>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full mb-4"
      />

      <div className="hidden sm:block">
        <p className="flex text-sm text-gray-900 font-semibold">
          {product.brand}
        </p>
        <h3 className="flex text-lg font-bold text-gray-800">{product.name}</h3>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center text-start text-sm pb-2 pt-20">
        <span className="pr-2 text-gray-400">SKU: {product.sku}</span>
        <span className="text-green-600 mt-1 sm:mt-0">
          Multiple Sizes Available
        </span>
      </div>

      <span className="flex">From</span>
      <span className="flex font-bold text-xl">{` $${product.price}`}</span>

      <button className="w-full text-sm font-semibold mt-4 py-2 px-4 bg-yellow-500 text-black rounded-sm hover:bg-yellow-600 transition-all">
        <span className="block sm:hidden">VIEW</span>
        <span className="hidden sm:block">VIEW PRODUCT</span>
      </button>
    </div>
  );
};

export default ProductCard;
