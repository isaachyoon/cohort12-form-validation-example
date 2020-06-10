import React, { Component } from 'react';
import './RegistrationForm.css';
import ValidationError from '../ValidationError/ValidationError';
import {validateName, validatePassword, validateRepeatPassword} from '../validate';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        value: '',
        touched: false
      },
      password: {
        value: '',
        touched: false
      },
      repeatPassword: {
        value: '',
        touched: false
      },
    }
  }

  updateName(name) {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    })
  }

  updatePassword(password) {
    this.setState({
      password: {
        value: password,
        touched: true
      } 
    })
  }

  updateRepeatPassword(password) {
    this.setState({
      repeatPassword: {
        value: password,
        touched: true
      }
    })
  }

  render () {
    const nameError = validateName(this.state.name.value);
    const passwordError = validatePassword(this.state.password.value);
    const repeatPasswordError = validateRepeatPassword(
      this.state.password.value,
      this.state.repeatPassword.value,
    );
    return (
      <form className="registration">
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>  
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="registration__control" required
            name="name" id="name" onBlur={(e) => this.updateName(e.target.value)}/>
          {this.state.name.touched && 
          <ValidationError message={nameError}/>}
        </div>
        <div className="form-group">
           <label htmlFor="password">Password *</label>
           <input type="password" className="registration__control"
            name="password" id="password" required
            onBlur={(e) => this.updatePassword(e.target.value)}/>
          {this.state.password.touched && 
          <ValidationError message={passwordError}/>}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input type="password" className="registration__control"
            name="repeatPassword" id="repeatPassword"  required
            onBlur={(e) => this.updateRepeatPassword(e.target.value)}/>
          {this.state.repeatPassword.touched && 
          <ValidationError message={repeatPasswordError}/>}
        </div>
        <div className="registration__button__group">
         <button type="reset" className="registration__button">
             Cancel
         </button>
         <button type="submit" 
          className="registration__button"
          disabled={nameError || passwordError || repeatPasswordError}>
             Save
         </button>
        </div>
      </form>
    )
  }
}

export default RegistrationForm;
