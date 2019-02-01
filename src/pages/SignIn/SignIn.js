import React, { Component, Fragment } from 'react'
import { EmailInput, PasswordInput, CTAButton, CardFooter, Title } from './AuthModules'
import { auth, persistence, firestore } from 'firebase/initialize'

import { successfulLoggedIn } from 'store/actions'
import { connect } from 'react-redux'
import './SignIn.css'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => this.setState({ [e.target.dataset.type]: e.target.value })

    handleSignIn = () => {
        const { email, password } = this.state

        auth.signInWithEmailAndPassword(email, password)
        .then(res => {
            this.props.successfulLoggedIn(res.user.email)
        })
        .catch(err => {
            console.log('err logged in', err)
        })
    }

    render() {
        const {email, password} = this.state
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
