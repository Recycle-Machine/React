import React from "react";
import { Link } from "react-router-dom";
import "../../UserMain/UserMain.css";

class RewardDrinks extends React.Component {
  render() {
    return (
      <React.Fragment>
          
        <div className="userMainBackgroundColor" style={{ height: '100vh' }}>
            <div className="mainBackground">
            <center>
                  <br />
                  <br />
                  <br />
                  <h1 className="userTitle">Drinks Discount</h1>
                  <br></br>
                  <h3 id="mainH3">Once you have gathered 500 points you can claim your Drinks Coupon which will give you a 50% Discount on the elegible brands</h3>
                  <img
                    className="mainImg"
                    src={
                      "https://www.dropbox.com/s/vtg6kdrhoj3c8or/Craft_beer_manufacturing-cuate.png?raw=1"
                    }
                    alt=""
                  />
              <Link to="/Rewards">
                <button className="userButton">Check other Rewards</button>
              </Link>

            </center>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RewardDrinks;