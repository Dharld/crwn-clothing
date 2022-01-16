import './App.css';
import React from "react"
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import {auth, createUserProfile} from "./firebase/firebase.utils"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentUser
} from "./redux/user/userSlice"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"


function App() {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.current_user)
  
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth)
        userRef.onSnapshot(userSnapshot => {
          dispatch(setCurrentUser({
            id: userRef.id,
            ...userSnapshot.data()
          }))
        })
      }
      else {
        dispatch(setCurrentUser(null))
      }
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [dispatch])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = "/" component = {Homepage} />
        <Route path = "/shop" component = {ShopPage} />
        <Route exact path = "/signin" render={() => currentUser ? (<Redirect to = "/"/>) : (<SignInAndSignUp/>)} />
        <Route path = "/checkout" component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

export default App;
