import React, { useState } from 'react';

const Signup = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  return <div>
    <div>회원가입</div>
    이메일<input type="text" value={email} onChange={handleEmail}></input>
    암&nbsp;호<input type="password" value={password} onChange={handlePassword}></input>
    <button onClick>회원 가입</button>
  </div>
}

export default Signup;