import React, { useEffect} from 'react';
import Star from '../../Star';
import axios from 'axios';

const ProductOverview = () => {
  return (
    <section className="overflow-hidden py-5">
      <div className="container">
        <div className="row">
          {/* Left Side - Image */}
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/400"
              alt="Product"
              className="img-fluid rounded"
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-3">
              <span className="text-sm font-weight-bold text-muted">Category:</span>
              <span className="ml-2">Footwear</span>
            </div>
            <h1 className="my-3">Nike Air Max 21A</h1>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sem id eros
              hendrerit, et hendrerit elit faucibus.
            </p>
            <div className="d-flex align-items-center mb-4">
              <span className="text-sm font-weight-bold mr-2">Rating:</span>
              <div className="d-flex align-items-center">
              {
              <Star />
              }
              </div>
            </div>
            <div className="mb-4">
              <span className="text-sm font-weight-bold mr-2">Price:</span>
              <span className="text-dark font-weight-bold">₹47,199</span>
            </div>
            <div className="mb-4">
              <span className="text-sm font-weight-bold mr-2">Quantity:</span>
              <input type="number" min="1" defaultValue="1" className="form-control w-25" />
            </div>
            <div className="d-flex">
              <button className="btn btn-primary mr-3">Add to Cart</button>
              <button className="btn btn-outline-secondary">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
