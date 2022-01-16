import React from "react"
import CollectionPreview from "../collection-preview/collection-preview.component"
import selectCollections from "../../redux/shop/shop.selectors"
import { useSelector } from "react-redux"
import "./collections-overview.styles.scss"

function CollectionsOverview() {
        const collections = useSelector(selectCollections)
        return(
            <div className="collections-overview">
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

export default CollectionsOverview