import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: black;
`;

class Init extends Component {

    render() {
        return (
            <Wrapper>
                <Title>
                    Hello World from react load Init!
                </Title>
            </Wrapper>
        )
    }
}

export default Init;



