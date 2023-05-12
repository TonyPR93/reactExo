import React from 'react';

class Exo7 extends React.Component{
    //constructor
    constructor(props){
      super(props);
      //la state
      this.state={
        nom:'',
        prenom:'',
        age: 0
      };
  
      //method, on la déclare ensuite on la défini, definit comme cela elle permet de catch l'event 
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    //la méthode : 
    handleInputChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      })
    }
  
    handleSubmit(event){
      event.preventDefault();
      const fr = this.state.age >= 18 ? 'Vous êtes majeur' : 'Vous êtes mineur';
      alert(`Bonjour ${this.state.nom} ${this.state.prenom}, ${fr}`);
    }
  
    //Quand on soumet le form on appelle la methode handleSubmit
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <label>Nom</label>
          <input type="text"
                  name="nom"
                  value={this.state.nom}
                  onChange={this.handleInputChange}
          />
          <label>Prenom</label>
          <input type="text"
                  name="prenom"
                  value={this.state.prenom}
                  onChange={this.handleInputChange}
          />
          <label>Age</label>
          <input type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleInputChange}
          />
          <button type="submit">Envoyer</button>
        </form>
      )
    }
  
  }
  export default Exo7;
  