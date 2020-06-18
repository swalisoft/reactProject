import React from 'react';
import '../assets/styles/Register.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../actions'

const Register = ({addUser, history})=>{
  const [state, setState] = React.useState({
    name:'',
    email:'',
    password:'',
    confinPassword:'',
  });

  const handleChange = event=>{
    setState({
      ...state,
      [event.target.name]:event.target.value,
    })
  }

  const handleSubmit = event =>{
    event.preventDefault();
    addUser(state);
    history.push('/')
  }

  return(
  <React.Fragment>
    <section className="register">
      <div className="register__conteiner">
        <h2 className="register__conteiner--title" >Sign up</h2>
        <form className="register__conteiner--form" action="/" onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="User Namer"
          name="name"
          value={state.name}
          onChange={handleChange}
          />
          <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={state.email}
          onChange={handleChange}
          />
          <input 
          type="password" 
          placeholder="Password" 
          name="password"
          value={state.password}
          onChange={handleChange}
          />
          <input 
          type="password" 
          placeholder="Confirm password" 
          name="confinPassword"
          value={state.confinPassword}
          onChange={handleChange}
          />
          <button type="submit">Sign up for JK Video</button>
        </form>
        <Link className="register__conteiner--login" to="/login">Login</Link>
      </div>
    </section>
  </React.Fragment>
  )
}

const mapDispachToProps = {
  addUser,
}

export default connect(null, mapDispachToProps)(Register);