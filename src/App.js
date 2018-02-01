import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from '../src/Register/index';
import Login from '../src/Login/login';
// import { connect } from 'react-redux';
class App extends Component {
  render() {
    // console.log(this.props.firstN)
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-md-6 col-md-offset-3" >
            <Router>
              <div>
                <Link to="/register" className="btn btn-link">Register</Link>
                <Link to="/login" className="btn btn-link">Login</Link>

                <Switch>
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//       firstN: state.fname
//   }
// }

export default App;

// export default connect(mapStateToProps)(App);