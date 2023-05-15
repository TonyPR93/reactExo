import React from 'react';
import { connect } from 'react-redux';
import { toggleSection } from '../actions/actionAccordeon';

class Explication extends React.Component{

    render(){
        const { expandedSections, toggleSection } = this.props;

        return(
            <div className='explication'>
                <h2 onClick={() => toggleSection(0)}>Partie 1</h2>
                <div className={expandedSections.includes(0) ? 'explain_accordeon expanded' : 'explain_accordeon'}> 
                    <p>
                        Création de deux classes React, Le premier est la classe calculatrice.
                    </p>
                    <p>
                        Constitué de deux div principalement, le "board" ou l'on voit le calcul et le resultat et la div qui contient tous les boutons
                    </p>
                </div>
                <h2 onClick={() => toggleSection(1)}>Partie 2</h2>
                <div className={expandedSections.includes(1) ? 'explain_accordeon expanded' : 'explain_accordeon'}>
                    <p>
                        Création la state dans ma classe calculatrice. Elle contient deux valeurs "input" qui affichera le calcul et "resultat".
                    </p>
                </div>
                <h2 onClick={() => toggleSection(2)}>Partie 3</h2>
                <div className={expandedSections.includes(2) ? 'explain_accordeon expanded' : 'explain_accordeon'}>
                    <p>
                        Ajout de REDUX, plusieurs changements ont du être effectué afin d'ajouter redux a mon "app" React :
                    </p>
                        <h4>Création de actionCalculatrice.js</h4>
                        <p>On créée les actions nécessaires</p>
                        <ul>
                            <li>addInput</li>
                            <li>clearInput</li>
                            <li>addResult</li>
                            <li>clearAllLastInput</li>
                        </ul>
                        <p>Exemple :</p>
                        <pre>
                            <code>
                                {`export const ADD_INPUT = 'ADD_INPUT';

                                export function addInput(input) {
                                    return {
                                        type: ADD_INPUT,
                                        payload: input,
                                    };
                                }`}
                            </code>
                        </pre>
                        <h4>Creation du reducer</h4>
                        <p>Le reducer est l'unique endroit ou la state peut être modifié</p>
                        <p>On import les actions qu'on a créée précédemment</p>
                        <pre>
                            <code>
                                {
                                    `import { ADD_INPUT, ADD_RESULT, CLEAR_ALL_LAST_INPUT, CLEAR_INPUT} from '../actions/actionCalculatrice';`
                                }
                            </code>
                        </pre>
                        
                        <p>On définit une state initial !!</p>
                        <pre>
                            <code>
                                {
                                    `const initialState = {
                                        input: '',
                                        result: 0,
                                        history: []
                                      };`
                                }
                            </code>
                        </pre>

                        <p>On fait un switch else en fonction des actions demandé, chaque actions retournera une nouvelle state</p>
                        <pre>
                            <code>
                                {
                                    `export default function calculatorReducer(state = initialState, action) {
                                        let newResult = 0;
                                        let newInput = '';
                                      
                                        switch (action.type) {
                                          case ADD_INPUT:
                                            newInput = state.input + action.payload;
                                            newResult = state.result;
                                            try {
                                              newResult = eval(newInput);
                                              if (!Number.isFinite(newResult)) {
                                                  newResult = 'Infinity or NaN';
                                                }
                                              } catch (error) {
                                                  newResult = '';
                                              }
                                            return {
                                              input: newInput,
                                              result: newResult,
                                              history: state.history
                                            };
                                      
                                          case CLEAR_INPUT:
                                            return {
                                              input: '',
                                              result: 0,
                                              history: []
                                            };
                                      
                                          case ADD_RESULT:
                                            newResult = state.result;
                                            try {
                                              newResult = eval(state.input);
                                              if (!Number.isFinite(newResult)) {
                                                newResult = 'Infinity or NaN';
                                              }
                                            } catch (error) {
                                              newResult = '';
                                            }
                                            
                                            ...
                                           `
                                }
                            </code>
                        </pre>

                        <h4>Modification de calculatrice.js</h4>
                        <p>On ajoute les actions a notre Calculatrice.js :</p>
                        <pre>
                            <code>
                                {
                                    `
                                    import { addInput, clearInput, addResult, clearAllLastInput } from '../actions/actionCalculatrice';
                                    `
                                }
                            </code>
                        </pre>

                        <p>Cela permettra d'ajouter des appels de fonctions comme celle ci :</p>
                        <pre>
                            <code>
                                {
                                    `
                                    <button onClick={() => this.props.clearAllLastInput()}>CE</button>
                                    <button onClick={() => this.props.clearInput()}>C</button>
                                    <button onClick={() => this.props.clearLastInput()}>Eff</button>
                                    <button onClick={() => this.props.addInput('0')}>0</button>
                                    <button onClick={() => this.props.addResult()}>=</button>
                                    `
                                }
                            </code>
                        </pre>

                        <p>On définit mapStateToProps et mapDispatchToProps</p>
                        <p>Ce code représente deux fonctions utilisées pour connecter les composants React à Redux</p>
                        <p>mapStateToProps permet de connecter votre composant à l'état global de Redux et de rendre les éléments de cet état accessibles via les props du composant, facilitant ainsi la récupération et la mise à jour des données. </p>
                        <p>mapDispatchToProps est utilisé pour mapper des actions de Redux aux props d'un composant React. Il permet de créer des fonctions spéciales qui déclenchent les actions correspondantes lorsque vous les appelez dans votre composant.</p>
                        <p>En utilisant mapDispatchToProps, vous pouvez définir des fonctions qui envoient des actions à Redux lorsque vous les appelez dans votre composant. Cela permet d'effectuer des modifications dans l'état global de l'application.</p>
                        <pre>
                            <code>
                                {
                                    `
                                    function mapStateToProps(state) {
                                        return {
                                          input: state.input,
                                          result: state.result,
                                          history: state.history
                                        };
                                      }
                                      
                                    function mapDispatchToProps(dispatch) {
                                        return {
                                            addInput: (value) => dispatch(addInput(value)),
                                            addResult: () => dispatch(addResult()),
                                            clearInput: () => dispatch(clearInput()),
                                            clearAllLastInput : () => dispatch(clearAllLastInput())
                                        //   addToHistory: (expression, result) => dispatch(addToHistory(expression, result))
                                        };
                                    }
                                    `
                                }
                            </code>
                        </pre>

                        <p>La fonction connect est un utilitaire fourni par la bibliothèque React Redux. Elle permet de connecter un composant React à l'état global géré par Redux</p>
                        <p>Elle permet :</p>
                        <ul>
                            <li>
                                Accéder à des parties spécifiques de l'état global de Redux en utilisant mapStateToProps : <code>{`connect(mapStateToProps)(Component).`}</code>
                            </li>
                            <li>
                                Déclencher des actions de Redux en utilisant mapDispatchToProps : <code>{`connect(null, mapDispatchToProps)`}</code>
                            </li>
                            <li>
                                À la fois accéder à l'état global de Redux et déclencher des actions : <code>{`connect(mapStateToProps, mapDispatchToProps)(Component).`}</code>
                            </li>
                        </ul>
                        <p>Elle effectue :</p>
                        <ul>
                            <li>Elle souscrit au magasin Redux (store) et met à jour le composant lorsqu'il y a des changements dans l'état global.</li>
                            <li>Elle injecte les props générées à partir de mapStateToProps et mapDispatchToProps dans le composant connecté.</li>
                            <li>Elle gère la logique interne pour vous, ce qui vous évite de devoir manuellement mettre à jour les props ou d'écouter les changements de l'état global.</li>
                        </ul>
                        <pre>
                            <code>
                                {
                                    `
                                    ...
                                    import { connect } from 'react-redux';
                                    ...

                                    //Reste du code


                                    export default connect(mapStateToProps, mapDispatchToProps)(Calculatrice);
                                    `
                                }
                            </code>
                        </pre>

                        <h4>Creation de la store</h4>
                        <p>Création de la storeCalculatrice.js</p>
                        <ul>
                            <li>
                                <code>{`import { createStore } from 'redux';`} </code> Importe la fonction createStore depuis le package Redux. Cela permet de créer un store Redux 
                            </li>
                            <li>
                                <code>{`import inputReducer from '../reducers/reducerCalculatrice';`} </code>  Importe le reducer inputReducer depuis le fichier reducerCalculatrice. Un reducer est une fonction qui spécifie comment l'état de l'application doit changer en réponse aux actions. Le reducer inputReducer gère les actions liées à la calculatrice.
                            </li>
                            <li>
                                <code>{`const store = createStore(inputReducer);`} </code> Crée le store Redux en utilisant createStore et en passant le reducer inputReducer en tant que paramètre. Le reducer spécifie comment les actions affectent l'état de l'application. Dans ce cas, inputReducer est utilisé pour gérer les actions liées à la calculatrice.
                            </li>
                            <li>
                                <code>{`export default store;`}</code>  Exporte le store créé afin qu'il puisse être utilisé dans d'autres parties de l'application.
                            </li>
                        </ul>
                        <p>
                            En résumé, ce code crée un store Redux en utilisant createStore et un reducer spécifique (inputReducer) pour gérer les actions liées à la calculatrice. Le store ainsi créé peut être importé et utilisé dans d'autres parties de l'application pour accéder à l'état global et déclencher des actions.
                        </p>
                        <pre>
                            <code>
                                {
                                    `
                                        import { createStore } from 'redux';
                                        import inputReducer from '../reducers/reducerCalculatrice';

                                        const store = createStore(inputReducer);

                                        export default store;

                                    `
                                }
                            </code>
                        </pre>

                        <h4>Le provider</h4>
                        <p>Le Provider (App.js)</p>
                        <p>Permet de rendre la store accessible a tout ce qu'elle englobe</p>
                        <pre>
                            <code>
                                {
                                    `
                                    .....
                                    import { Provider } from 'react-redux';
                                    import store from './store/storeCalculatrice';
                                    .....


                                    class App extends React.Component {
                                        render() {
                                          return (
                                            <Provider store={store}> <----- Ici
                                            <BrowserRouter>
                                              <div>
                                                <nav>
                                                  <ul>
                                                    <li>
                                                      <Link to="/">Accueil</Link>
                                                    </li>
                                                    <li>
                                                      <Link to="/page1">Exo 1</Link>
                                                    </li>
                                                </nav>
                                      
                                                <Routes>
                                                  <Route path="/page1" element={<Page1 />} />
                                                  <Route path="/page2" element={<Page2 />} />
                                                  <Route path="/page3" element={<Page3 />} />
                                                  <Route path="/page4" element={<Page4 />} />
                                                  <Route path="/page5" element={<Page5 />} />
                                                  <Route path="/page6" element={<Page6 />} />
                                                  <Route path="/page7" element={<Page7 />} />
                                                  <Route path="/page8" element={<Page8 />} />
                                                  <Route path="/" element={<Accueil />} />
                                                  <Route path="/rr1" element={<Rr1 />}/>
                                                </Routes>
                                              </div>
                                            </BrowserRouter>
                                            </Provider>
                                          );
                                        }
                                      }
                                    `
                                }
                            </code>
                        </pre>
                </div>
                <h2 onClick={() => toggleSection(3)}>Partie 4</h2>
                <div className={expandedSections.includes(3) ? 'explain_accordeon expanded' : 'explain_accordeon'}>
                        <p>Creation des pages avec react-router-dom</p>
                        <p>BrowserRouter: C'est un composant qui utilise le mode de routage basé sur l'URL du navigateur. Il enveloppe votre application et permet de gérer la navigation en utilisant l'URL. Il s'agit essentiellement du point de départ de la configuration de React Router DOM.</p>
                        <p>Routes: C'est un composant qui contient toutes les définitions d'itinéraires (Route). Il est utilisé pour définir quel composant doit être rendu en fonction de l'URL actuelle. Vous pouvez le considérer comme un conteneur pour les itinéraires de votre application.</p>
                        <p>Route: C'est un composant qui définit une correspondance entre un chemin d'URL spécifique et un composant à rendre lorsque ce chemin est atteint. Il prend deux props principales : path (le chemin de l'URL) et element (le composant à rendre lorsque le chemin correspond). Par exemple, {`<Route path="/page1" element={<Page1 />} />`} spécifie que lorsque l'URL correspond à "/page1", le composant Page1 doit être rendu.</p>
                        <p>Link: C'est un composant utilisé pour créer des liens de navigation entre différentes pages de l'application. Il prend une prop to qui spécifie l'URL vers laquelle le lien doit pointer. Par exemple, {`<Link to="/page1">Exo 1</Link>`} crée un lien vers la page "/page1". Lorsque vous cliquez sur ce lien, l'URL dans le navigateur sera mise à jour et le composant correspondant sera rendu.</p>
                        <p>J'utilise BrowserRouter en tant que conteneur principal pour le routage. Ensuite, je définis les différents itinéraires (Route) à l'intérieur du composant Routes. J'utilise également le composant Link pour créer des liens de navigation dans la barre de navigation.

                            En enveloppant mon App.js avec BrowserRouter et en définissant les itinéraires avec Routes et Route, React Router DOM gère la correspondance entre l'URL actuelle et les composants à rendre, tout en vous permettant de naviguer entre les différentes pages de l'application en utilisant les liens créés avec Link.

                            Cela facilite la création d'une application avec plusieurs pages et la gestion de la navigation entre ces pages en utilisant React Router DOM.</p>
                        <pre>
                            <code>
                                {
                                    `
                                    import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

                                    import Accueil from './pages/exo0'
                                    import Page1 from './pages/exo1'
                                    import Page2 from './pages/exo2'

                                    class App extends React.Component {
                                        render() {
                                          return (
                                            <Provider store={store}>
                                            <BrowserRouter>
                                              <div>
                                                <nav>
                                                  <ul>
                                                    <li>
                                                      <Link to="/">Accueil</Link>
                                                    </li>
                                                    <li>
                                                      <Link to="/page1">Exo 1</Link>
                                                    </li>
                                                    <li>
                                                      <Link to="/page2">Exo 2</Link>
                                                    </li>

                                                    //Reste du code....

                                                    <Routes>
                                                    <Route path="/page1" element={<Page1 />} />
                                                    <Route path="/page2" element={<Page2 />} />
                                                    <Route path="/page3" element={<Page3 />} />
                                                    <Route path="/page4" element={<Page4 />} />
                                                    <Route path="/page5" element={<Page5 />} />
                                                    <Route path="/page6" element={<Page6 />} />
                                                    <Route path="/page7" element={<Page7 />} />
                                                    <Route path="/page8" element={<Page8 />} />
                                                    <Route path="/" element={<Accueil />} />
                                                    <Route path="/rr1" element={<Rr1 />}/>
                                                    </Routes>
                                                </div>
                                            </BrowserRouter>         

                                    `
                                }
                            </code>
                        </pre>
                    
                </div>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      expandedSections: state.explication.expandedSections
    };
  };
  
  const mapDispatchToProps = {
    toggleSection: toggleSection
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Explication);