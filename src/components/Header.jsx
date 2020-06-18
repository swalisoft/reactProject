import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../Utils/gravatar';
import { logoutRequest } from '../actions';
import PropType from 'prop-types';

  const Heater = ({user, logoutRequest}) => {
    const handleLogout = ()=>{
      logoutRequest({});
    }
    const UserLength = Object.keys(user).length;
    return (
      <header className="header">
        <div className="brand">
          <img className="header__img" src="https://i.imgur.com/RdrXj8S.png?1" alt="logo de platzi" /> 
          <h4>Video <span>Collection</span></h4>
        </div>
        <div className="header__menu">
          {UserLength
            ?<img className="header__img" src={gravatar(user.email)} alt="logo de platzi" />
            :<img src="https://i.imgur.com/A4bnKkj.png" alt="profile" />
          }
          <p>Profile</p>
          <ul>
            {UserLength
              ?<li><a href="/">Account</a></li>
              :<li><Link to="/register">Register</Link></li>
            }
            {UserLength
              ?<li><Link to="#logout" onClick={handleLogout}>Sign out</Link></li>
              :null
            }
          </ul>
        </div>
      </header>
    );
}
const mapStoreToPorps = state =>{
  return{
    user: state.user,
  }
}

const mapDispachToProps = { 
  logoutRequest,
}

Heater.prototype = {
  user: PropType.object,
  logoutRequest: PropType.func,
}

export default connect(mapStoreToPorps, mapDispachToProps)(Heater);