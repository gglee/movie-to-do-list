import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  width: 100%;
  .wrapper {
    width: 1200px;
    height: 5rem;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    color: rgb(40, 42, 53);
    .brand {
      width: 69px;
    }
    .header-links {
      margin-left: 2.5rem;
      display: flex;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    a + a {
      margin-left: 2rem;
    }
  }
`;

type HeaderProps = {};

function Header() {
  return (
    <HeaderBlock>
      <div className="wrapper">
        <div className="brand">
          <Link to="/">Movies To Do List</Link>
        </div>
        <div className="header-links">
          <Link to="/upcoming">Upcoming</Link>
          <Link to="/watch">Watch List</Link>
        </div>
      </div>
    </HeaderBlock>
  );
}
export default Header;
