import { useState } from 'react';

export default function Form() {

// States for registration
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [mobilenumber, setMobileNumber] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the user change
const handleUser = (e) => {
    setUser(e.target.value);
    setSubmitted(false);
};
//Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};
// Handling the Username change
const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
};

// Handling the mobilenumber change
const handleMobileNumber = (e) => {
    setMobileNumber(e.target.vaule);
    setSubmitted(false);
};
// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};
// Handling the confirmpassword change 
const handleConfirmPassword = (e) => {
    setConfirmPassword  (e.target.vaule);
    setSubmitted(false);
};
// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (user === '' || email === '' || username === '' || mobilenumber === '' || password === ''|| confirmpassword === '' ) {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {user} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Register</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
        {/* Labels and inputs for form data */}
		<label className="label">User</label>
		<input onChange={handleUser} className="input"
		value={user} type="text" /><br/><br/>

        <label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" /><br/><br/>

        <label className="label">Username</label>
		<input onChange={handleUsername} className="input"
		value={username} type="text" /><br/><br/>

        <label className="label">Mobilenumber</label>
		<input onChange={handleMobileNumber} className="input"
		value={mobilenumber} type="tect" /><br/><br/>


		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" /><br/><br/>

		<label className="label">Confirmpassword</label>
		<input onChange={handleConfirmPassword} className="input"
		value={confirmpassword} type="confirmpassword" /><br/><br/>

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}