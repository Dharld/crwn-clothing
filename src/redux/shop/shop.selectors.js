import { createSelector } from "@reduxjs/toolkit";

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    ({collections}) => 
        Object
            .entries(collections)
            .map(([key, value]) => value)
)

export const selectCollection = title => 
    createSelector(
        [selectShop],
        ({ collections }) => collections[title]
    )


export default selectCollections
