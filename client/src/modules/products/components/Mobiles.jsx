import React from "react";
import mobileOne from "../../../assets/img/products/Mobiles/mobileone.jpeg";
import mobileTwo from "../../../assets/img/products/Mobiles/mobiletwo.jpeg";
import mobileThree from "../../../assets/img/products/Mobiles/mobilethree.jpeg";
import mobileFour from "../../../assets/img/products/Mobiles/mobilefour.jpeg";
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
                    src={mobileOne}
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
                    src={mobileTwo}
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
                    src={mobileThree}
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
                    src={mobileFour}
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
