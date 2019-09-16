import React, { Component } from 'react';
class App extends Component{
   render(){
      return(
         <div>
            <h1>Hello World, a litte change</h1>
            <p data-myattribute = "somevalue">This is the content!!!</p>
             <p>{2+5}</p>
         </div>

      );
   }
}
export default App;