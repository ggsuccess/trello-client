import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  const handleName = e => {
    setName(e.target.value);
  }
  const submitSignup = () => {
    if (email === '' || name === '' || password === '') {
      alert('이메일,이름,비밀번호를 모두 입력해야합니다');
    } else {
      axios.post('http://localhost:3000/adduser', { email: email, name: name, password: password })
      .then(() => console.log('가입성공'))
      .catch(err => console.log('가입실패에러:'+err));
    }
  }
  return <div>
    <div>회원가입</div>
    이메일<input type="text" value={email} onChange={handleEmail}></input>
    이름<input type="text" value={name} onChange={handleName}></input>
    암&nbsp;호<input type="password" value={password} onChange={handlePassword}></input>
    <button onClick={submitSignup}>회원 가입</button>
  </div>
}

export default Signup;