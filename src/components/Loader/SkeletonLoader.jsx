import React from "react";

const SkeletonLoader = ({ count = 4, height = 200, width = "100%" }) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div
        key={i}
        className="mb-4 animate-pulse bg-gray-200"
        style={{ height, width }}
      />
    );
  }

  return <>{skeletons}</>;
};

export default SkeletonLoader;
