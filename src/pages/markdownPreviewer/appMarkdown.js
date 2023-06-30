import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { inite } from '../../actions/actionMarkdown';

const MarkdownPreviewer = ({ id, inite }) => {
    useEffect(() => {
      inite();
    }, []); // Le tableau vide [] indique que le useEffect s'exécutera une seule fois au montage du composant
  
    return (
      <div className="App">
        <p>{id}</p>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      id: state.markdown.id
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      inite: () => dispatch(inite())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);
