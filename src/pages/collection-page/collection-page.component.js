import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection-page.styles.scss"
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match }) => {
    const {categoryTitle} = match.params
    const collection = useSelector(state => selectCollection(categoryTitle)(state))
    return(
        <div className="collection-page">
            <div className="title">{categoryTitle.toUpperCase()}</div>
            <div className="items">
                {
                    collection.items.map(
                        item => <CollectionItem key = {item.id} item = {item} />
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPage