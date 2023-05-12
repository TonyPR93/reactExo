import React from 'react';

function Exo2() {

  const alertPopup = () => {
    alert('Bonjour, ceci est une alerte popup');
  }

    return (
      <div className="App">
        <button onClick={alertPopup}>
          Cliquez cliquez
        </button>
      </div>
    );
  }

export default Exo2