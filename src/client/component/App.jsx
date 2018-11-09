import React, { Component } from 'react';
// import styled from 'styled-components';
// import Loadable from 'react-loadable';

import Loading from './Loading.jsx';
import NavBar from './NavBar.jsx';


// import SimpleModalWrapped from './Modal.jsx' //-----> Componente funciona

 import FilledTextFields from './Login.jsx'
 
 

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
         
        </div>  
        )
    }
}

export default App;