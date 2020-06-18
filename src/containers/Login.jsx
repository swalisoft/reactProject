import React from 'react';
import '../assets/styles/Login.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

const Login = props => {
  const[form, setForm] = React.useState({
    email:'',
    password:'',
  })

  const handleOnChange = event =>{
    setForm({
      ...form,
      [event.target.name]:event.target.value,
    })
  }

  const handleSubmit = event =>{
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/')
  }

  return(
  <React.Fragment>
    <section className="login">
      <div className="login__conteiner">
        <h2>Login</h2>
        <form  className="login__conteiner--form"  onSubmit={handleSubmit}>
          <input 
            className="inputLogin" 
            type="email" 
            name="email"
            placeholder="Email addres"
            onChange = {handleOnChange}
            value={form.email}
          />
          <input 
          className="inputLogin" 
          type="password"
            name="password"
          placeholder="Password"
          onChange = {handleOnChange}
          value={form.password}
          />
          <input className="login__conteiner--form-button" type="submit" value="Submit" />
          <div className="login__conteiner--rememberMe">
            <label>
              <input type="checkbox" id="box1"/>Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>
        </form>
        <div className="login__conteiner--socialMedia">
          <div>
            <img src="https://i.imgur.com/CgbOSAC.png" alt="ops!" /> 
            Login with Google Account
          </div>
          <div>
            <img src="https://i.imgur.com/xOrVkWM.png" alt="ops!" /> Login with Twitter Account
          </div>
        </div>
        <p className="login__conteiner--signUp">Do you have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </section>
  </React.Fragment>
)};

const mapDispachToProps ={
  loginRequest,
}

export default connect(null, mapDispachToProps)(Login)