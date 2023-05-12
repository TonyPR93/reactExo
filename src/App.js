import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/storeCalculatrice';

import Accueil from './pages/exo0'
import Page1 from './pages/exo1'
import Page2 from './pages/exo2'
import Page3 from './pages/exo3'
import Page4 from './pages/exo4'
import Page5 from './pages/exo56'
import Page6 from './pages/exo7'
import Page7 from './pages/exo8'
import Page8 from './pages/exo9'
import Rr1 from './pages/calculatrice'


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
              <li>
                <Link to="/page3">Exo 3</Link>
              </li>
              <li>
                <Link to="/page4">Exo 4</Link>
              </li>
              <li>
                <Link to="/page5">Exo 5 et 6</Link>
              </li>
              <li>
                <Link to="/page6">Exo 7</Link>
              </li>
              <li>
                <Link to="/page7">Exo 8</Link>
              </li>
              <li>
                <Link to="/page8">Exo 9</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/rr1">Calculatrice</Link>
              </li>
            </ul>
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
export default App;
