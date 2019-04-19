import React, { Component } from "react";
import styled from 'styled-components';

const HomeStyle = styled.div`
   .something{
       background: blue;
   }
`

class Home extends Component {
  render() {
    return (
     <HomeStyle>
        <div className='something'>
            
        </div>
    </HomeStyle>
    );
  }
}

export default Home;
