import React from 'react';
import Header from './header'
import Footer from './footer'
import { login, signUp } from '../services/auth'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "calven@gmail.com",
      password: "123456",
      errorMessage: "",
      successMessage: "",
      loading: false
    }
  }

  salvarUsuario = async () => {
    this.setState({ loading: true })
    await signUp(this.state.email, this.state.password)
      .then(msg => this.setState({ successMessage: msg, errorMessage: "" }))
      .catch(msg => this.setState({ errorMessage: msg.message, successMessage: "" }))
    this.setState({ loading: false })
  }

  logon = async () => {
    this.setState({ loading: true })
    await login(this.state.email, this.state.password)
      .then(() => this.props.history.push("/admin"))
      .catch(erro => this.setState({ errorMessage: erro.message }))
  }


  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>LOGIN</h1>

        <h4 style={{ color: "red" }} >{this.state.errorMessage}</h4>
        <h4 style={{ color: "green" }} >{this.state.successMessage}</h4>
        <input
          placeholder="Informe o seu e-mail"
          type="email"
          value={this.state.email}
          onChange={
            (e) => this.setState({ email: e.target.value })
          }
        />
        <br />
        <input
          placeholder="Informe sua senha"
          type="password"
          value={this.state.password}
          onChange={
            (e) => this.setState({ password: e.target.value })
          }

        />
        <br />
        <button onClick={() => this.logon()}>ENTRAR</button>
        <button onClick={() => this.salvarUsuario()}>NOVO USUÁRIO</button>

      </div>
    )
  }
}

export default Home;
