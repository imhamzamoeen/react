import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';

class Car extends React.Component {
  
   constructor(props) {
      super(props);
      this.changeState = this.changeState.bind(this);
      
      
      this.state = {
            brand: "Ford",
            model: "Mustang",
            };
         }
         changeState() {
            this.setState({ model: "raptor" });
            }
   render() {
      return (
         <div>
            <Helmet>
<title>Hamza Moeen</title>
</Helmet>
         <h1>My {this.state.brand}</h1>
         <p> It is a {this.state.model} </p>
         <Button variant="contained" color="primary" onClick ={this.changeState}> Click to change </Button>
         </div>
            );
         }
}
export default Car