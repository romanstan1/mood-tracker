import React, { Component } from 'react'
import { EmailInput, PasswordInput, CTAButton, CardFooter, Title, Message } from './AuthModules'
import { auth, firestore } from 'firebase/initialize'

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
        .then(firebaseUser => {
            this.uploadUserData(email, firebaseUser)
        })
        .catch(error => {
            console.log('err logged in', error)
            this.setState({error})
        })
    }
    


    uploadUserData = (email, firebaseUser) => {
        const names = email.split("@")[0].split(".")
        const docRef = firestore.collection("users").doc(firebaseUser.user.uid)
        docRef.get().then(doc => {
            if (!doc.exists) {
                docRef.set({
                    email,
                    firstName: names[0],
                    lastName: names[1],
                    dates: []
                })
                .catch(error => console.log('Error on user upload::', error))
            }
        })
        .then(res => {
            console.log("success on upload and logged in!", res)
            this.props.successfulLoggedIn(firebaseUser.user)
        })
        .catch(error => {
            console.log("Error getting document:", error);
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
