import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return <div>
    <nav className="header-nav">
      <Link to='/signUp'>회원 가입</Link>
      <Link to='/login'>로그인</Link>
      <Link to="/myPage">마이페이지</Link>
      <Link to='/createBoard'>보드 생성하기</Link>
    </nav>
  </div>
}

export default Header;