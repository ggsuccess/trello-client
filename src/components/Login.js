import React, { useState } from 'react';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  }
  const onChangePassword = e => {
    setPassword(e.target.value);
  }
  return <div>
      <div>Login</div>
      이메일<input type="text" value={email} onChange={onChangeEmail}></input>
      암&nbsp;호<input type="password" value={password} onChange={onChangePassword}></input>
      <button onClick>로그인</button>
    </div>
}

export default Login;