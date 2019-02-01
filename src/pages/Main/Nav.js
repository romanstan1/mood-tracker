import React, { Component } from 'react'
import headerLogo from "../../assets/headerLogo.png"

class Nav extends Component {
    render() {
        return (
            <nav>
                <img  src={headerLogo} alt="Vibes"/>
            </nav>        
        )
    }
}


export default Nav
