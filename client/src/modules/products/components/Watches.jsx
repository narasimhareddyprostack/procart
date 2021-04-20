import React from "react";
import watchOne from "../../../assets/img/products/watches/watch_1.jpg";
import watchTwo from "../../../assets/img/products/watches/watch_2.jpg";
import watchThree from "../../../assets/img/products/watches/watch_3.jpg";
import watchFour from "../../../assets/img/products/watches/watch_4.jpg";
let Mobiles = () => {
  return (
    <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3> Mobile - Data</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-4">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchOne}
                    alt="Nokia Mobile"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Nokia Mobile</li>
                    <li className="list-group-item">50000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchTwo}
                    alt="Nokia Mobile"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Opp Mobile</li>
                    <li className="list-group-item">10000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchThree}
                    alt="Poco Mobile"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Poco Mobile</li>
                    <li className="list-group-item">30000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchFour}
                    alt="Nokia Mobile"
                    height="50%"
                    width="50%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Mi Mobile</li>
                    <li className="list-group-item">50000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Mobiles;
