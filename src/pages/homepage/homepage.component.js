import React from "react"
import { HomepageContainer } from "./homepage.styles"
import Directory from "../../components/directory-menu/directory-menu.component"

const Homepage = ({history}) => (
    <HomepageContainer>
        <Directory history = {history} />
    </HomepageContainer>
)

export default Homepage