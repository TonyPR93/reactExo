import React from 'react';

class Exo3 extends React.Component{
    constructor(props){
    super(props)
    this.state={
        ind: 3
    }
  }
  render(){
      return <Buttons ind={this.state.ind}/>;
  }
}

class Buttons extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    alert(`Bouton ${i+1}`);
  }

  render(){
    const buttons = []
    for (let i = 0; i < this.props.ind ; i++) {
      buttons.push(<button key={i} onClick={() => this.handleClick(i)}>Bouton {i+1}</button>);
    }
    return buttons;
  }
}

export default Exo3