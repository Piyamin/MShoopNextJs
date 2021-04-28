// import { useRouter } from 'next/router';
import React from "react";
function MeetupItemlist(props) {
  // const router = useRouter();
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="single-popular-items mb-50 text-center">
          <a href="/">
            <div className="popular-img">
              <img src={props.image} alt />
              <div className="img-cap">
                <span>Add to cart</span>
              </div>
              <div className="favorit-items">
                <span className="flaticon-heart" />
              </div>
            </div>
          </a>
          <div className="popular-caption">
            <h3 style={{ color: "#E5192B" }}>
              <a href="product_details.html">{props.name}</a>
            </h3>
            <h3>
              <span style={{ color: "#E5192B " }}>
                price {props.price}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetupItemlist;
