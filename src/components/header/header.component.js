import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

const Header = () => {
    const currentUser = useSelector(state => selectCurrentUser(state))
    const hidden = useSelector(state => selectHidden(state))
    return(
        <div className="header">
            <Link to = "/">
                <div className="logo-container">
                    <Logo/>
                </div>
            </Link>
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