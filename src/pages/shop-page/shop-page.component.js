import React from "react"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection-page/collection-page.component"

function ShopPage({ match }) {
    return(
        <div className="shop">
            <Route exact path = {`${match.path}/`} component = {CollectionsOverview} />
            <Route path = {`${match.path}/:categoryTitle`} component = {CollectionPage} />
        </div>
    )
}

export default ShopPage