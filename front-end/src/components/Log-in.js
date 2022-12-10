/*
const login = () => {
    return <h1>Log-in</h1>;
  };



  export default login;

  */

  import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    }

    function Login() {

    }

    return (
        <div>
          Log-in
          <input value={email} onChange={handleEmailInput}></input>
          <input value={password} onChange={handlePasswordInput}></input>
          <button onClick={Login}>Log-in</button>
        </div>
      );
}

export default Login;