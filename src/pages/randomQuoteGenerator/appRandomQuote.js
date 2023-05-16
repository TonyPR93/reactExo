import React from 'react';
import { connect } from 'react-redux';
import { getRandomQuote } from '../../actions/actionRandomQuote';


class AppRandomQuote extends React.Component {
    
      render() {
        return (
            <div>
            <h1>Random Quote Generator</h1>
            {this.props.quote && this.props.author && (
                <div>
                <h3>{this.props.quote}</h3>
                <p>- {this.props.author}</p>
                </div>
            )}
            <button onClick={this.props.getRandomQuote}>Nouvelle citation</button>

          </div>
        );
      }
    }
    
    const mapStateToProps = state => {
        return {
        id: state.randomQuote.id,
          quote: state.randomQuote.quote,
          author: state.randomQuote.author
        };
      };
    
      const mapDispatchToProps = dispatch => {
        return {
          getRandomQuote: () => dispatch(getRandomQuote())
        };
      };
    
    export default connect(mapStateToProps, mapDispatchToProps)(AppRandomQuote);