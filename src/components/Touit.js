import React from 'react';
class Touit extends React.Component {
    render( ) {
const{name,message}=this.props;
       return (
          <div className="touit">
          <p>{message}</p>
            <span>{name}</span>
          </div>
       );
    }
 }
 export default Touit;
  