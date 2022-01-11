import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

const Header = () => {
    const currentUser = useSelector(state => state.user.current_user)
    const hidden = useSelector(state => state.cart.hidden)
    return(
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
                <CartIcon/>
            </div>
            {
                hidden ? null :  <CartDropdown/>
            }
        </div>
    )
}

export default Header