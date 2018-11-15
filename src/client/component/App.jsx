import React, { Component } from 'react';
// import styled from 'styled-components';
// import Loadable from 'react-loadable';

import Loading from './Loading.jsx';
import NavBar from './NavBar.jsx';


// import SimpleModalWrapped from './Modal.jsx' //-----> Componente funciona

import FilledTextFields from './Login.jsx'
import { hot } from 'react-hot-loader'
 

// const LoadableComponent = Loadable({
//     loader: () => import("./Home"),
//     loading: Loading
//   });

class App extends Component {

    render() {
        return (
        <div>
          <NavBar/>
          <Loading/>
          <FilledTextFields/>     
          <h1>hola</h1>  
        </div>  
        )
    }
}

export default hot(module)(App);