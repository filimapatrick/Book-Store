import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((item,id) => {
    // const { id, title, image, price, category } = product;
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
    return (
      <div className="four wide column"
      //  key={id}
       >
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={thumbnail}  />
              </div>
              <div className="content">
                <div className="header"></div>
                <div className="meta price"> </div>
                <div className="meta"> </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;