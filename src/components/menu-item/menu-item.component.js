import React from "react"
import "./menu-item.styles.scss"
import {withRouter} from "react-router"

const MenuItem = ({title, imageUrl, size, history, match, link}) => {
    return(
    <div className={`${size ? "large":""} menu-item`} onClick = {() => history.push(`${match.url}${link}`)}>
        <div 
            className="background-image"
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <div className="title">{title.toUpperCase()}</div>
            <div className="subtitle">Shop Now</div>
        </div>
    </div>
    )
}

export default withRouter(MenuItem)