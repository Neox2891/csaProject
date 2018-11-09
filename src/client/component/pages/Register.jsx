import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { auth } from '../helpers/Auth'

import '../helpers/forms.css' // No dejar espacios entre las rutas
import '../helpers/buttons.css'

import './login-register.css'

export default class Register extends Component {

    constructor(...props) {
        super(...props)

        this.state = { loginMessage: null }
 
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

        this.setMessage = this.setMessage.bind(this)
    }

    handleOnSubmit(e) {

        e.preventDefault()
            auth(this.email.value, this.password.value) // Ejecuta el método auth que creaUnUsuarioConEmailYPassword
                 .catch(err => this.setState(this.setMessage(`Error: ${err.message}`) ))

    }

    setMessage(err) {
        return { loginMessage: err }
    }

    render() {
        return (
            <article className="Main-container">

                <h1>Registro de Usuario</h1>

                <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit} >

                    <input type="email" placeholder="E-mail" ref={email => this.email = email} />

                    <input type="password" placeholder="Password" ref={password => this.password = password} />

                    {
                        this.state.loginMessage &&
                        <div className="u-error">
                            <p> Error: &nbsp;{this.state.loginMessage}&nbsp; </p>
                            
                        </div>
                    }

                    <input className="pure-button pure-button-primary" type="submit" value="Registrar" />

                </form>

            </article>

        )//Fin return

    } //Fin render()

} // Fin Class