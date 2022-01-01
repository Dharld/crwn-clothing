import React from "react";
import "./custom-button.styles.scss"

const CustomButton = ({ handleSubmit, children, isGoogle, ...otherProps}) => (
    <button
        className={`${isGoogle ? "googleSignIn" : ""} custom-button`}
        onSubmit={handleSubmit}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton