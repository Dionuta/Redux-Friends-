import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NavStyle = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 36px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    flex-direction: row;
  li {
    list-style: none;
    margin-right: 6px;
    color: #204963;
  }

  a {
    border-radius: 5em;
    color: #fff;
    background: linear-gradient(to right, #FF6868, #DF5BA3);
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  } 
}
`;

class Nav extends Component {
  render() {
    return (
      <NavStyle>
        <nav>
          <ul>
            <li>
              {!localStorage.getItem("token") ? <Link to="/login">
                Log In
                
              </Link> : <Link to="/login">
                Log out
              </Link>}
              
            </li>
            <li>
              <Link to="/protected">
                Friends
              </Link>
            </li>
          </ul>
        </nav>
      </NavStyle>
    );
  }
}

export default Nav;
