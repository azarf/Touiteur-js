import React from 'react';
class Trending extends React.Component { 
 constructor(){
     super();
     this.state={
         trendings:[]
     };
 }

componentDidMount(){

fetch('http://touiteur.cefim-formation.org/trending', {
    method: 'GET',
  })
    .then(response => response.json())
    .then((responseText) => {
      this.setState({ trendings : responseText});
      console.log(responseText)
    })
    .catch((error) => {
      console.log("error", error);
    })

}
    render() {
        const trendingsarray= Object.keys(this.state.trendings).map((key) => [key, this.state.trendings[key]]);
        return (
            <div className='containertouit'> 
          
          
            {trendingsarray.map(trending =>
        
        <div className='touit'>
        <p>{trending}</p>
        </div>
            )}
      
            </div>
            
    );
}
}


    export default Trending;