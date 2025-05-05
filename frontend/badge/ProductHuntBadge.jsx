import React from "react";

const ProductHuntBadge = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1000, // Ensures it stays above other elements
      }}
    >
      <a
        href="https://www.producthunt.com/posts/bidscapes?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bidscapes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=637929&theme=light"
          alt="BidScapes - Bidding made a bit easy | Product Hunt"
          style={{ width: "250px", height: "54px" }}
        />
      </a>
    </div>
  );
};

export default ProductHuntBadge;
