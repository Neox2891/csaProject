import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class App extends Component {

    render() {
        return (
            <Wrapper>
                <Title>
                    Hello World from react with Styled-Components!
                </Title>
            </Wrapper>
        )
    }
}

export default App;