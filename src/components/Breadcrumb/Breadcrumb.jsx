import React from "react";

const Breadcrumb = ({ items }) => {
  return (
    <div className=" flex text-sm text-gray-400 flex-wrap">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && <span className="mx-2"> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
