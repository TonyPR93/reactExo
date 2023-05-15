import React from 'react';
import Calculatrice from './calculatrice';
import Explication from './explication';

class AppCalculatrice extends React.Component {
  render() {
    return (
      <div>
        <Calculatrice />
        <Explication />
      </div>
    );
  }
}

export default AppCalculatrice;