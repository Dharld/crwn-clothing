import React from "react"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"
import shop_data from "./shop-data"

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: [...shop_data]
        }
    }

    render() {
        const collections = this.state.collections
        return(
            <div className="shop">
                <h1>Collections</h1>
                {
                    collections.map(({id, title, items}) => (
                        <CollectionPreview 
                            key = {id}
                            title = {title}
                            items = {items}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage