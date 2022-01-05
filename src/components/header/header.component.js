import React from "react"
import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase.utils"

const Header = ({ currentUser }) => (
    <div className="header">
        <div className="logo-container">
            <Logo/>
        </div>
        <div className="options">
            <Link className = "option" to = "/shop">SHOP</Link>
            {
                currentUser ?
                <div style = {{ cursor: "pointer"}} onClick = {() => {
                    auth.signOut()
                }}>SIGN OUT</div>
                :
                <Link className = "option" to = "/signin">SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header