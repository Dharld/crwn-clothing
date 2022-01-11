import './App.css';
import React from "react"
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfile} from "./firebase/firebase.utils"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCurrentUser
} from "./redux/user/user.slice"

import {
  Switch,
  Route,
} from "react-router-dom"


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: userRef.id,
            ...snapshot.data()
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
  }, [])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = "/" component = {Homepage} />
        <Route path = "/shop" component = {ShopPage} />
        <Route path = "/signin" component = {SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
