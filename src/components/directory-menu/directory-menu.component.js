import React from "react"
import { selectSections } from "../../redux/directory/directory.selectors";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss"

function Directory() {
    const sections = useSelector(state => selectSections(state))
    return(
        <div className="directory-menu">
            {
                sections.map(({ title, id, imageUrl, size, linkUrl}) => (
                    <MenuItem 
                        key = {id} 
                        title = {title} 
                        imageUrl = {imageUrl}
                        size = {size}
                        link = {linkUrl}
                    />   
                ))
            }
        </div>
    )
}

export default Directory