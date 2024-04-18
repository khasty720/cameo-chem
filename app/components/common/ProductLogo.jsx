import React from 'react';

export function ProductLogo({size = 28, name}) {
  return (
    <div className="product-logo">
      <svg
        viewBox="0 0 1024 1024"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M706.349486 674.145864a22.805678 22.805678 0 0 0-22.805678 22.805678 171.669114 171.669114 0 0 1-171.669114 171.669114 22.805678 22.805678 0 1 0 0 45.611356 217.531082 217.531082 0 0 0 217.28047-217.28047 22.805678 22.805678 0 0 0-22.805678-22.805678z" />
        <path d="M511.874694 1024A324.041116 324.041116 0 0 1 188.334802 699.958884C188.334802 514.004895 399.851199 170.917279 490.823299 31.827704L511.874694 0l21.051395 31.827704c70.923152 108.013705 302.739109 476.162506 302.739109 668.13118a324.291728 324.291728 0 0 1-323.790504 324.041116z m0-932.276065C426.917279 225.550661 238.457171 537.81302 238.457171 699.958884a273.668135 273.668135 0 1 0 547.085658 0c0-134.829173-137.585903-396.467939-273.668135-608.234949z" />
      </svg>
      <strong>{name}</strong>
    </div>
  );
}
