import React from 'react';

export default class Formlogin extends React.Component {
  state=  {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
  };
  change = e=>{
    this.setState({
        [e.target.name]: e.target.value
    });
  };
    render(){
      return(
          <form>
            <input
            name="firstname"
            placeholder="First Name"
            onChange={e => this.change(e)}
            />
            <input
            name="lastname"
            placeholder="Last Name"
            onChange={e => this.change(e)}
            />
            <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => this.change(e)}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => this.change(e)}
            />
          </form>
      );
    }
}
