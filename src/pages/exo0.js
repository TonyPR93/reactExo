import React from 'react';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return(
            <div>
                <h1>Bienvenue</h1>
                <p>Ceci est une serie d'exercice en React</p>
                <ul>
                    <li>Ceci est l'acceuil</li>
                    <li>L'exo 1 est une simple fonction renvoyant "Hello World"</li>
                    <li>L'exo 2 est un onClick()</li>
                    <li>L'exo 3 est identique a l'exo 2 mais avec 3 boutons</li>
                        <ul>
                            <li>    
                                <pre>
                                {`
                                    for (let i = 0; i < this.props.ind; i++) {
                                        buttons.push(<button key={i} onClick={() => this.handleClick(i)}>Bouton $ {i+1}</button>);
                                    }
                                `}
                                </pre>
                                <p>Permet de savoir sur quelle bouton on a cliqué</p>
                            </li>
                        </ul>
                    <li>L'exo 4 est un onClick() qui change la state de ma class</li>
                    <li>L'exo 5-6 permet d'afficher le contenue d'un array, qui permettent d'afficher le nom et une image. </li>
                
                    <li>L'exo 7 est un formulaire, les informations inscritent dedans apparaissent sous fourme d'alert lors du submit</li>
                </ul>
            </div>
        )
    }
}

export default Homepage