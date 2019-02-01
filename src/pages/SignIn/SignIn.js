import React, { Component } from 'react'
import { EmailInput, PasswordInput, CTAButton, CardFooter, Title, Message } from './AuthModules'
import { auth } from 'firebase/initialize'

import { successfulLoggedIn } from 'store/actions'
import { connect } from 'react-redux'
import './SignIn.css'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: false
    }

    handleChange = (e) => this.setState({ [e.target.dataset.type]: e.target.value, error: false })

    handleSignIn = () => {
        const { email, password } = this.state

        auth.signInWithEmailAndPassword(email, password)
        .then(res => {
            this.props.successfulLoggedIn(res.user.email)
        })
        .catch(error => {
            this.setState({error})
            console.log('error logged in', error)
        })
    }

    render() {
        const {email, password, error} = this.state
        return (
            <div className='Auth'>
                <Title /> 
                 <div className="card">
                    <EmailInput
                        email={email}
                        handleChange={this.handleChange}
                    />
                    <PasswordInput
                        password={password}
                        handleChange={this.handleChange}
                    />
                    <CTAButton
                        handleClick={this.handleSignIn}>
                        Sign In
                    </CTAButton>
                    <CardFooter
                        link='send-email'>
                        Forgot your password?
                    </CardFooter>
                    <Message error={error}>{error}</Message>
                </div> 
            </div>
        )
    }
}


const mapState = state => ({
})

const mapDispatch = {
    successfulLoggedIn
}

export default connect(mapState, mapDispatch)(SignIn)
