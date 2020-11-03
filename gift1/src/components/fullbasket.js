import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Fullbasket extends Component {
  render() {
    return (
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="./cheeseBasket.jpg"
              className="card-img"
              alt="cheeseBasket"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="Fullbasket">Cheese . Basket</h5>
              <p className="card-text">
                Send a collection of premium artisan cheeses fresh from
                California wine country in this elegant willow basket to the
                cheese connoisseur in your life. They'll love the Fiscalini
                Cheddar, Bellwether Farms Carmody, Aged Vella Mezzo Secco
                Monterrey Jack, and Sierra Nevada Classic Aged Goat Cheddar
                cheeses. Enough to satisfy both a curious palate and a healthy
                appetite.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fullbasket;
