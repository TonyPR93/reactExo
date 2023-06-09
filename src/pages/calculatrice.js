import React from 'react';
import { connect } from 'react-redux';
import { addInput, clearInput, addResult, clearAllLastInput } from '../actions/actionCalculatrice';


class Calculatrice extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input: '',
            result:0,
            history: []
        }
    }


    //method

    render(){
        return(
            <div>
                <h1>Calculatrice React/Redux</h1>
                <div>
                    <div className='board'>
                        <div className='calcul'>{this.props.input}</div>
                        <div className='rep'>{this.props.result}</div>
                    </div>
                    <div className='boutons'>
                        <div className='row'>
                            <button onClick={() => this.props.addInput('%')}>%</button>
                            <button onClick={() => this.props.clearAllLastInput()}>CE</button>
                            <button onClick={() => this.props.clearInput()}>C</button>
                            <button onClick={() => this.props.clearLastInput()}>Eff</button>
                        </div>
                        <div className='row'>
                            <button onClick={() => this.props.addInput('')}>1/X</button>
                            <button onClick={() => this.props.addInput('²')}>x²</button>
                            <button onClick={() => this.props.addInput('')}>Math.sqrt()</button>
                            <button onClick={() => this.props.addInput('/')}>/</button>
                        </div>
                        <div className='row'>
                            <button onClick={() => this.props.addInput('7')}>7</button>
                            <button onClick={() => this.props.addInput('8')}>8</button>
                            <button onClick={() => this.props.addInput('9')}>9</button>
                            <button onClick={() => this.props.addInput('*')}>X</button>                            
                        </div>
                        <div className='row'>
                            <button onClick={() => this.props.addInput('4')}>4</button>
                            <button onClick={() => this.props.addInput('5')}>5</button>
                            <button onClick={() => this.props.addInput('6')}>6</button>
                            <button onClick={() => this.props.addInput('-')}>-</button>
                        </div>
                        <div className='row'>
                            <button onClick={() => this.props.addInput('1')}>1</button>
                            <button onClick={() => this.props.addInput('2')}>2</button>
                            <button onClick={() => this.props.addInput('3')}>3</button>
                            <button onClick={() => this.props.addInput('+')}>+</button>
                        </div>
                        <div className='row'>
                            <button onClick={() => this.props.addInput('')}>+/-</button>
                            <button onClick={() => this.props.addInput('0')}>0</button>
                            <button onClick={() => this.props.addInput('.')}>,</button>
                            <button onClick={() => this.props.addResult()}>=</button>
                        </div>
                    </div>
                </div>
                <div className="history">
                    <h2>Historique</h2>
                    {this.props.history.map((entry, index) => (
                    <div key={index}>
                        <span>{entry.expression} = </span>
                        <span>{entry.result}</span>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      input: state.calculatrice.input,
      result: state.calculatrice.result,
      history: state.calculatrice.history
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Calculatrice);