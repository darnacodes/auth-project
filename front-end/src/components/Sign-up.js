/*
const Signup = () => {
    return <h1>Signup</h1>;
  };


  export default Signup;
  */
  import { useState } from 'react';

  function Signup() {
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [name, setName] = useState("")
      
      function handleEmailInput(event) {
          setEmail(event.target.value)
      }
  
      function handleNameInput(event) {
          setName(event.target.value)
      }
  
      function handlePasswordInput(event) {
          setPassword(event.target.value)
      }
  
      function signup() {
    
            // POST sign-up
            // get the token and store it Localstorage
            fetch('http://localhost:5000/users/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "password": password,
                    "email": email
                })
            })
            .then(data => data.json())
            .then(response => {
                window.localStorage.setItem('token', response.jwtToken)
            })
            // if there are any errors, display the error
            
        };
          
      
  
      return (
          <div>
            Signup
            <input value={name} onChange={handleNameInput}></input>
            <input value={email} onChange={handleEmailInput}></input>
            <input value={password} onChange={handlePasswordInput}></input>
            <button onClick={signup}>Signup</button>
          </div>
        );
  }
  
  export default Signup;
