import React from 'react';

class Exo56 extends React.Component{
    constructor(props){
      super(props);
      this.state ={
  
      }
    }
    render(){
      const animals =['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
      return (
        <div key="listingTot">
            <Listing animals={animals}/>
            <img src={require('../cat.jpg')} alt=""/>
        </div>
      )
    }
  }
  
  class Listing extends React.Component{
    render(){
      const list = this.props.animals.map(i => <div key={i} className="divlist">
                                                  <li key={i}>
                                                    <img className="picList" src={require(`../${i}.jpg`)} alt={i} />
                                                      <p>
                                                        {i}
                                                      </p>
                                                  </li>
                                                </div>)
      return <ul className="theList">{list}</ul>
    }
  }

export default Exo56;