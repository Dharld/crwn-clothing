import React from "react"
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss"
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        const {email, password} = this.state
        return(
            <div className="sign-in">
                <h2 className="title">I already have account.</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name = "email"
                        type="email"
                        label = "Email" 
                        value = {email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name = "password"
                        type="password"
                        label = "Password" 
                        value = {password}
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Submit
                        </CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogle>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn