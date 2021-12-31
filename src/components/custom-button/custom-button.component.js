import React from "react";
import "./custom-button.styles.scss"

const CustomButton = ({ handleSubmit, children, ...otherProps}) => (
    <button
        className="custom-button"
        onSubmit={handleSubmit}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton