import React, { Component } from 'react'
import HomeNotLogin from './Home/HomeNotLogin';

// import Dashboard from "./Dashboard";
import Cards from './HomeLogin/Cards';
import Carrousel from './HomeLogin/Carrousel';
import Login from "./LoginSystem/Login";
import Register from "./LoginSystem/Register";

class Home extends Component {
  render() {
    const { isAuth } = this.props;

    return (
      <div>
        {
          isAuth ? (
            <div>
              <Carrousel/>
              <hr/>
              <Cards/>
            </div>
            
          ) :
          <div>
            <div className="row">
              <div className="col-md">
                <Login auth={this.props.auth} />
              </div>
              <div className="col-md">
                <Register />
              </div>,
              <HomeNotLogin/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Home;