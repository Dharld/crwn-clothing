import React from "react"

import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss"
import data from "./directory.data"

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [...data]
        }
    }

    render() {
        console.log(this.state)
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, id, imageUrl, size}) => (
                        <MenuItem 
                            key = {id} 
                            title = {title} 
                            imageUrl = {imageUrl}
                            size = {size}
                        />   
                    ))
                }
            </div>
        )
    }

}

export default Directory