import React from 'react';

class Exo4 extends React.Component{
    constructor(props){
      super(props);
      this.state={
        count: 0
      }
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(){
      this.setState({
        count: this.state.count+1
      })
    }
    render(){
      return (
        <div>
          <button onClick={this.handleChange}>Cliquez</button>
          <p>Vous avez cliqué {this.state.count} fois</p>
        </div> )
    }
  }

export default Exo4