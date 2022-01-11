import React from "react"

import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss"
import data from "./directory.data"

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [...data]
        }
    }
    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, id, imageUrl, size, linkUrl}) => (
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

}

export default Directory