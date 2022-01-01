import './App.css';
import React from "react"
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from "./firebase/firebase.utils"

import {
  Switch,
  Route,
} from "react-router-dom"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if(user) {
        this.setState({ currentUser: user})
      }
      else {
        this.setState({ currentUser: null})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const {currentUser} = this.state
    return (
      <div>
        <Header currentUser = {currentUser} />
        <Switch>
          <Route exact path = "/" component = {Homepage} />
          <Route path = "/shop" component = {ShopPage} />
          <Route path = "/signin" component = {SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
