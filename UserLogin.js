import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserLogin extends Component {
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{}
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
        this.validateForm=this.validateForm.bind(this);
    }

    handleChange(e){
        let fields=this.state.fields;
        fields[e.target.name]=e.target.value;
        this.setState({
            fields
        });
    }

    submitForm(e){
        e.preventDefault();
        if(this.validateForm()){
            alert("Login successful");
        }
    }

    validateForm(){
let fields=this.state.fields;
let errors={};
let isValid=true;
if(!fields["username"]){
    isValid=false;
    errors["username"]="*please enter a username";
}
if(!fields["password"]){
    isValid=false;
    errors["password"]="*please enter a password";
}
this.setState({
    errors:errors
});
return isValid;
    }


    render() {
        return (
            <>
            <div>UserLogin</div>
            <form onSubmit={this.submitForm}>
            <label>username : </label>
            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}/><br/>
            <div className='error'>{this.state.errors.username}</div><br/>
            <label>Password : </label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}/><br/>
            <div className='error'>{this.state.errors.password}</div><br/>
            <button>Login</button>
            </form>
            <p>New User : </p><Link className="front_link" to="/signup">Signup</Link>
            </>
        )
    }
    

}