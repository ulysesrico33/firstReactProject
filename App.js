import React, { Component } from 'react';
class App extends Component{
   render(){

      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }

      return(
         <div>
            <h1 style={myStyle}>Hello World, a litte change</h1>
            <p data-myattribute = "somevalue">This is the content!!!</p>
             <p>{2==1 ? 'YES':'NO'}</p>
         </div>

      );
   }
}
export default App;