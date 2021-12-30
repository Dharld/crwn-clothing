import React from "react"
import "./menu-item.styles.scss"

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size ? "large":""} menu-item`}>
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

export default MenuItem