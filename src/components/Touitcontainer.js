import React from 'react';
import Touit from './Touit'
class Touitcontainer extends React.Component { 
 constructor(){
     super();
     this.state={
         touits:[]
     };
 }

componentDidMount(){

fetch('http://touiteur.cefim-formation.org/list', {
    method: 'GET',
  })
    .then(response => response.json())
    .then((responseText) => {
      this.setState({ touits: responseText.messages});
    })
    .catch((error) => {
      console.log("error", error);
    })

}
    render() {
        return (
            <div className='containertouit'>
            {this.state.touits.map((touit, index) => <Touit key={index} {...touit} />)}
            </div>
          
    );
}
}


    export default Touitcontainer; 
    