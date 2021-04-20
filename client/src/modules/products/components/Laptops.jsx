import React from "react";
import laptopOne from "../../../assets/img/products/laptops/acer.jpeg";
import laptopTwo from "../../../assets/img/products/laptops/hp.jpeg";
import laptopThree from "../../../assets/img/products/laptops/hp-original.jpeg";
import laptopFour from "../../../assets/img/products/laptops/nokia-x14-thin.jpeg";
let Laptops = () => {
  return (
    <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3> Laptops - Data</h3>
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
                    src={laptopOne}
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
                    src={laptopOne}
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
                    src={laptopOne}
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
                    src={laptopOne}
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
                    src={laptopTwo}
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
                    src={laptopThree}
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
                    src={laptopFour}
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
export default Laptops;
